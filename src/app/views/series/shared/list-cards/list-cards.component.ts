import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { Data } from 'src/app/models/Data';

import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
})
export class ListCardsComponent<T> implements OnInit, OnDestroy {
  // Infite-Scroll Settings
  @Input() isTotalItems = false;
  @Input() items!: number;
  @Input() accumItems!: number;
  @Input() throttle = 500;
  @Input() scrollDistance = 1;
  @Input() scrollUpDistance = 2;
  // Function to perform the search
  @Input() callBack!: Function;
  // Refresh the search
  @Input() refresh!: Subject<boolean>;

  series!: Serie[];

  constructor() {}

  ngOnInit(): void {
    this.getList();
    this.refreshSearch$();
  }

  refreshSearch$ = () => {
    if (this.refresh)
      this.refresh.asObservable().subscribe((isRefresh: boolean) => {
        if (isRefresh) {
          this.series = [];
          this.accumItems = 0;
          this.isTotalItems = false;
          this.getList();
        }
      });
  };

  getList = () =>
    this.callBack(this.accumItems)
      .pipe(
        tap((data: any) => console.log(data.data.results.length)),
        filter((data: Data) => {
          if (data.data.results.length < 10) {
            this.isTotalItems = true;
          } else {
            this.isTotalItems = false;
          }
          return !this.isTotalItems || data.data.results.length > 0;
        }),
        map((data: Data) =>
          this.series?.length > 0
            ? this.series.concat(data.data.results)
            : data.data.results
        ),
        take(1)
      )
      .subscribe(
        (series: Serie[]) => {
          console.log(series);
          this.series = series;
        },
        (error: boolean) => {
          if (error) this.isTotalItems = true;
        }
      );

  onScrollDown = () => {
    console.log(this.isTotalItems);
    if (!this.isTotalItems) {
      this.accumItems += this.items;
      this.getList();
    }
  };

  ngOnDestroy() {
    console.log('ngOnDestroy');
    if (this.refresh) this.refresh.unsubscribe();
  }
}
