import { Component, OnInit } from '@angular/core';
import { map, take, debounceTime, filter, tap } from 'rxjs/operators';

import { Serie } from 'src/app/models/Serie';

import { SerieService } from 'src/app/controllers/serie/serie.service';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

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
