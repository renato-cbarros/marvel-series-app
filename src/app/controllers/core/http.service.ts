import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  constructor(private httpClient: HttpClient) {}

  get$ = (api: string, params?: HttpParams): Observable<T> => {
    if (!params) params = new HttpParams();
    params = params
      ?.append(environment.TS.split('=')[0], environment.TS.split('=')[1])
      .append(
        environment.API_KEY.split('=')[0],
        environment.API_KEY.split('=')[1]
      )
      .append(environment.HASH.split('=')[0], environment.HASH.split('=')[1]);

    return this.httpClient.get<T>(`${environment.BASE_API_URL}${api}`, {
      params,
    });
  };
}
