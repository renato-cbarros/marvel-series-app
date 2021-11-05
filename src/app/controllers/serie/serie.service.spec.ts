import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { MOCK_LIST_SERIES } from './mocks/list-series.mock';

import { Serie } from 'src/app/models/Serie';

import { SerieService } from './serie.service';
import { Data } from 'src/app/models/Data';

describe('SerieService', () => {
  let service: SerieService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL_GET =
    'https://gateway.marvel.com//v1/public/series?orderBy=title&limit=10&offset=0&ts=1&apikey=ec023cc710cb69c813951883df7c163c&hash=959415f635fc4a7430a78298e79d4eae';
  const URL_GET_BY_ID =
    'https://gateway.marvel.com//v1/public/series/31445?ts=1&apikey=ec023cc710cb69c813951883df7c163c&hash=959415f635fc4a7430a78298e79d4eae';
  const mockList: Data = MOCK_LIST_SERIES;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(SerieService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should be list all series', (done) => {
    service.listSeries(0).subscribe((res: Serie[]) => {
      expect(res.length).toEqual(10);
      expect(res[0].title).toEqual(
        ' Fantastic Four by Dan Slott Vol. 1 (2021)'
      );
      expect(res[9].title).toEqual('1939 Daily Bugle (2009 - Present)');

      done();
    });

    const req = httpTestingController.expectOne(URL_GET);
    req.flush(mockList);

    expect(req.request.method).toEqual('GET');
  });

  it('(U) should get serie by id', (done) => {
    service.findSerieById('31445').subscribe((res: Serie) => {
      expect(res).toBeTruthy();
      expect(res.title).toEqual(' Fantastic Four by Dan Slott Vol. 1 (2021)');

      done();
    });

    const req = httpTestingController.expectOne(URL_GET_BY_ID);
    req.flush(mockList);

    expect(req.request.method).toEqual('GET');
  });
});
