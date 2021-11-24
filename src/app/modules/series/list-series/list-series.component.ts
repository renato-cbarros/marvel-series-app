import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Serie } from 'src/app/shared/models/Serie';

import { SerieService } from 'src/app/core/services/serie/serie.service';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss'],
})
export class ListSeriesComponent implements OnInit {
  carouselImages = [{ src: '', alt: '', title: '' }];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.getList(0)
      .pipe(
        map((series: Serie[]) =>
          series.filter(
            (serie: Serie) =>
              !serie.thumbnail.path.includes('image_not_available')
          )
        ),
        map((series: Serie[]) =>
          series.map((serie: Serie) => {
            return {
              src: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
              alt: serie.title,
              title: serie.title,
            };
          })
        ),
        take(1)
      )
      .subscribe((res: any) => {
        this.carouselImages = res;
      });
  }

  getList = (offset: number): Observable<Serie[]> =>
    this.serieService.listSeries(offset);
}
