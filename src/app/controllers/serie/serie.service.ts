import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Data } from 'src/app/models/Data';
import { Serie } from 'src/app/models/Serie';

import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private httpService: HttpService<Data>) {}

  listSeries = (offset: number): Observable<Serie[]> =>
    this.httpService
      .get$('/v1/public/series', this.getParams(String(offset)))
      .pipe(map((data: Data) => data.data.results));

  findSerieById = (id: string): Observable<Serie> =>
    this.httpService
      .get$(`/v1/public/series/${id}`)
      .pipe(map((data: Data) => data.data.results[0]));

  findSerieByParams = (
    offset: number,
    formData: FormGroup
  ): Observable<Serie[]> => {
    const arrayOfParams = this.isThereValue(formData);
    if (arrayOfParams.length > 0) {
      return this.httpService
        .get$(
          '/v1/public/series',
          this.getParams(String(offset), formData, arrayOfParams)
        )
        .pipe(map((data: Data) => data.data.results));
    } else {
      return throwError(true);
    }
  };

  getParams = (
    offset: string,
    searchDataForm?: FormGroup,
    searchData?: string[]
  ): HttpParams => {
    let params = new HttpParams()
      .append('orderBy', 'title')
      .append('limit', '10')
      .append('offset', offset);

    if (searchData) {
      searchData.forEach((field: any) => {
        params = params.set(field, searchDataForm?.value[field]);
      });
    }

    return params;
  };

  isThereValue = (fields: FormGroup): string[] => {
    return Object.keys(fields.value).filter((field: string) =>
      fields.value[field] && fields.controls[field].valid ? field : null
    );
  };
}
