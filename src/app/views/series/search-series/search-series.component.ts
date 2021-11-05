import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { SerieService } from 'src/app/controllers/serie/serie.service';
import { Data } from 'src/app/models/Data';
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-search-series',
  templateUrl: './search-series.component.html',
  styleUrls: ['./search-series.component.scss'],
})
export class SearchSeriesComponent implements OnInit {
  // List card settings
  refresh$: Subject<boolean> = new Subject();

  // Layout
  formDataSearch!: FormGroup;

  seriesType: any = {
    Collection: 'collection',
    'One Shot': 'one shot',
    Limited: 'limited',
    Ongoing: 'ongoing',
  };
  seriesTypeSelect = Object.keys(this.seriesType);

  orderBy: any = {
    Title: 'title',
    'Start Year': 'startYear',
    Modified: 'modified',
  };
  orderBySelect = Object.keys(this.orderBy);

  constructor(
    private serieService: SerieService,

    private formBuilder: FormBuilder
  ) {
    this.formDataSearchInstance();
  }

  ngOnInit(): void {
    this.formDataSearchInstance();

    this.formDataSearch.valueChanges
      .pipe(
        filter((value) => this.validFileds(value)),
        debounceTime(1000),
        distinctUntilChanged(
          (x: any, y: any) => JSON.stringify(x) === JSON.stringify(y)
        )
      )
      .subscribe((res) => this.refresh$.next(true));
  }

  validFileds = (fields: any): boolean => {
    let valid = false;

    Object.keys(fields).forEach((field) => {
      if (
        typeof fields[field] == 'number' &&
        String(fields[field]).length > 3
      ) {
        valid = true;
      } else if (
        fields[field] &&
        fields[field].length > 2 &&
        fields[field].trim() !== ''
      ) {
        valid = true;
      }
    });

    return valid;
  };

  formDataSearchInstance = () => {
    this.formDataSearch = this.formBuilder.group({
      titleStartsWith: [null],
      startYear: [null],
      modifiedSince: [null],
      seriesType: [null],
      orderBy: [null],
    });
  };

  getList = (offset: number): Observable<Serie[]> =>
    this.serieService.findSerieByParams(offset, this.formDataSearch);
}
