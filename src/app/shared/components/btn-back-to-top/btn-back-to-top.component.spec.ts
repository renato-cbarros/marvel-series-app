import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBackToTopComponent } from './btn-back-to-top.component';

describe('BtnBackToTopComponent', () => {
  let component: BtnBackToTopComponent;
  let fixture: ComponentFixture<BtnBackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnBackToTopComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should scroll to "0"', () => {
    document.body.scrollTop = 100; // For Safari
    document.documentElement.scrollTop = 100; // For Chrome, Firefox, IE and Opera

    component.backToTop();

    expect(document.body.scrollTop).toEqual(0);
    expect(document.documentElement.scrollTop).toEqual(0);
  });
});
