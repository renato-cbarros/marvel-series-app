import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';

import { SeriesComponent } from './series.component';
import { ListSeriesComponent } from './list-series/list-series.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SeriesComponent, ListSeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MatCardModule,
    MatDividerModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
  ],
})
export class SeriesModule {}
