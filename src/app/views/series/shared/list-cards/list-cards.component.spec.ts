import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardsComponent } from './list-cards.component';

describe('ListCardsComponent', () => {
  let component: ListCardsComponent<any>;
  let fixture: ComponentFixture<ListCardsComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
