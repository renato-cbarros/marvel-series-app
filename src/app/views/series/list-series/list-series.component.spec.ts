import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCardsComponent } from '../shared/list-cards/list-cards.component';

import { ListSeriesComponent } from './list-series.component';

describe('ListSeriesComponent', () => {
  let component: ListSeriesComponent;
  let fixture: ComponentFixture<ListSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSeriesComponent, ListCardsComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
