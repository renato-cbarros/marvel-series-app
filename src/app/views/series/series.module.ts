import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';

import { SeriesComponent } from './series.component';
import { ListSeriesComponent } from './list-series/list-series.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MoreDetailsSerieComponent } from './more-details-serie/more-details-serie.component';

@NgModule({
  declarations: [
    SeriesComponent,
    ListSeriesComponent,
    MoreDetailsSerieComponent,
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    InfiniteScrollModule,
  ],
})
export class SeriesModule {}
