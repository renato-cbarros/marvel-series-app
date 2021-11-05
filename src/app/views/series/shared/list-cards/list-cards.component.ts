import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

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
  @Input() callBack: Function = () => {};
  // Refresh the search
  @Input() refresh!: Subject<boolean>;

  private series!: Serie[];

  constructor() {}

  ngOnInit(): void {
    this.setSeriesList();
    this.refreshSearch$();
  }

  private refreshSearch$ = () => {
    if (this.refresh)
      this.refresh.asObservable().subscribe((isRefresh: boolean) => {
        if (isRefresh) {
          this.series = [];
          this.accumItems = 0;
          this.isTotalItems = false;
          this.setSeriesList();
        }
      });
  };

  get getSeriesList(): Serie[] {
    return this.series;
  }

  private setSeriesList = () =>
    this.callBack(this.accumItems)
      ?.pipe(
        filter((series: Serie[]) => {
          if (series.length < 10) {
            this.isTotalItems = true;
          } else {
            this.isTotalItems = false;
          }
          return !this.isTotalItems || series.length > 0;
        }),
        map((series: Serie[]) =>
          this.series?.length > 0 ? this.series.concat(series) : series
        ),
        take(1)
      )
      .subscribe(
        (series: Serie[]) => {
          this.series = series;
        },
        (error: boolean) => {
          if (error) this.isTotalItems = true;
        }
      );

  onScrollDown = () => {
    if (!this.isTotalItems) {
      this.accumItems += this.items;
      this.setSeriesList();
    }
  };

  ngOnDestroy() {
    if (this.refresh) this.refresh.unsubscribe();
  }
}
