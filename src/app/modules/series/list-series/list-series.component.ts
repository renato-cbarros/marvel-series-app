import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Serie } from 'src/app/shared/models/Serie';

import { SerieService } from 'src/app/core/services/serie/serie.service';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss'],
})
export class ListSeriesComponent implements OnInit {
  constructor(private serieService: SerieService) {}

  ngOnInit(): void {}

  getList = (offset: number): Observable<Serie[]> =>
    this.serieService.listSeries(offset);
}
