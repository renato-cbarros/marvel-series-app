import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { MOCK_LIST_SERIES } from 'src/app/controllers/serie/mocks/list-series.mock';
import { SerieService } from 'src/app/controllers/serie/serie.service';

import { Serie } from 'src/app/models/Serie';

import { MoreDetailsSerieComponent } from './more-details-serie.component';

describe('MoreDetailsSerieComponent', () => {
  let component: MoreDetailsSerieComponent;
  let fixture: ComponentFixture<MoreDetailsSerieComponent>;
  let service: SerieService;

  const mock: Serie = MOCK_LIST_SERIES.data.results[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 31445 }),
          },
        },
      ],
      declarations: [MoreDetailsSerieComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsSerieComponent);
    service = TestBed.inject(SerieService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should get serie', () => {
    spyOn(service, 'findSerieById').and.returnValue(of(mock));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.findSerieById).toHaveBeenCalledWith('31445');
    expect(component.serieData).toBeTruthy();
    expect(component.serieData.title).toEqual(
      ' Fantastic Four by Dan Slott Vol. 1 (2021)'
    );
  });

  it('(I) should get serie', () => {
    spyOn(service, 'findSerieById').and.returnValue(of(mock));

    component.ngOnInit();
    fixture.detectChanges();

    let serieTitle = fixture.debugElement.nativeElement.querySelector(
      '.details-texts-title'
    );

    expect(serieTitle.textContent).toEqual(
      ' Fantastic Four by Dan Slott Vol. 1 (2021)'
    );
  });
});
