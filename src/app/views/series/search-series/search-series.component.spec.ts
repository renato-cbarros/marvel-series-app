import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListCardsComponent } from '../shared/list-cards/list-cards.component';
import { SearchSeriesComponent } from './search-series.component';

describe('SearchSeriesComponent', () => {
  let component: SearchSeriesComponent;
  let fixture: ComponentFixture<SearchSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSeriesComponent, ListCardsComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
