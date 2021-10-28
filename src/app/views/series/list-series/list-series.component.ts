import { Component, OnInit } from '@angular/core';
import { map, take, debounceTime } from 'rxjs/operators';

import { Serie } from 'src/app/models/Serie';

import { SerieService } from 'src/app/controllers/serie/serie.service';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss'],
})
export class ListSeriesComponent implements OnInit {
  sum = 10;
  throttle = 500;
  scrollDistance = 1;
  scrollUpDistance = 2;

  series!: Serie[];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList = (offset = 0) => {
    this.serieService
      .listSeries(offset.toString())
      .pipe(
        debounceTime(300),
        map((res: any) =>
          this.series?.length > 0 ? this.series.concat(res) : res
        ),
        take(1)
      )
      .subscribe((res: Serie[]) => (this.series = res));
  };

  onScrollDown = () => {
    this.getList(this.sum);
    this.sum += 10;
  };
}
