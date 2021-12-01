import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Data } from 'src/app/shared/models/Data';
import { Serie } from 'src/app/shared/models/Serie';

import { HttpService } from '../../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private httpService: HttpService<Data>) {}

  listSeries = (offset: number): Observable<Serie[]> =>
    this.httpService
      .get$('/v1/public/series', this.getParams(String(offset)))
      .pipe(map((res: Data) => this.fixImagesUrl(res.data.results)));

  findSerieById = (id: string): Observable<Serie> =>
    this.httpService
      .get$(`/v1/public/series/${id}`)
      .pipe(map((res: Data) => this.fixImagesUrl(res.data.results)[0]));

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
        .pipe(map((res: Data) => this.fixImagesUrl(res.data.results)));
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

  fixImagesUrl = (series: Serie[]) => {
    series.map((serie: Serie) => {
      serie.thumbnail.path = serie.thumbnail.path.split('http:')[1];
      return serie;
    });

    return series;
  };
}
