import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Data } from 'src/app/models/Data';
import { Serie } from 'src/app/models/Serie';

import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private httpService: HttpService<Data>) {}

  listSeries = (offset: string): Observable<Serie[]> =>
    this.httpService
      .get$(
        '/v1/public/series',
        new HttpParams()
          .append('orderBy', 'title')
          .append('limit', '10')
          .append('offset', offset)
      )
      .pipe(map((data: Data) => data.data.results));
}
