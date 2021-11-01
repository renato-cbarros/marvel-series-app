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

  listSeries = (offset: string): Observable<Data> =>
    this.httpService
      .get$('/v1/public/series', this.getParams(offset))
      .pipe(map((data: Data) => data));

  findSerieById = (id: string): Observable<Serie[]> =>
    this.httpService
      .get$(`/v1/public/series/${id}`)
      .pipe(map((data: Data) => data.data.results));

  findSerieByParams = (
    offset: string,
    formData: FormGroup
  ): Observable<Data> => {
    console.log(formData);

    if (this.isThereValue(formData)) {
      return this.httpService
        .get$('/v1/public/series', this.getParams(offset, formData))
        .pipe(map((data: Data) => data));
    } else {
      return throwError(true);
    }
  };

  getParams = (offset: string, searchData?: FormGroup): HttpParams => {
    let params = new HttpParams()
      .append('orderBy', 'title')
      .append('limit', '10')
      .append('offset', offset);

    if (searchData) {
      Object.keys(searchData.value)
        .filter(
          (field) => searchData.value[field] && searchData.controls[field].valid
        )
        .forEach((field) => {
          params = params.append(field, searchData.value[field]);
        });
    }
    console.log(params);

    return params;
  };

  isThereValue = (fields: FormGroup): boolean => {
    let valid = false;

    Object.keys(fields.value).forEach((field) => {
      if (fields.value[field] && fields.controls[field].valid) {
        valid = true;
      }
    });

    return valid;
  };
}
