import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SerieService } from 'src/app/controllers/serie/serie.service';
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-more-details-serie',
  templateUrl: './more-details-serie.component.html',
  styleUrls: ['./more-details-serie.component.scss'],
})
export class MoreDetailsSerieComponent implements OnInit {
  serieData!: Serie;

  constructor(
    private activatedRoute: ActivatedRoute,

    private serieService: SerieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((data) => String(data.id).trim()),
        filter((id) => id.length > 0),
        switchMap((id) => this.serieService.findSerieById(id)),
      )
      .subscribe((serie: Serie) => {
        this.serieData = serie;
      });
  }
}
