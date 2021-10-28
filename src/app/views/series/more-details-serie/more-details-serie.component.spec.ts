import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsSerieComponent } from './more-details-serie.component';

describe('MoreDetailsSerieComponent', () => {
  let component: MoreDetailsSerieComponent;
  let fixture: ComponentFixture<MoreDetailsSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDetailsSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
