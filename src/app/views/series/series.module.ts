import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SeriesRoutingModule } from './series-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSelectModule } from '@angular/material/select';

import { MoreDetailsSerieComponent } from './more-details-serie/more-details-serie.component';
import { SearchSeriesComponent } from './search-series/search-series.component';
import { ListCardsComponent } from './shared/list-cards/list-cards.component';
import { SeriesComponent } from './series.component';
import { ListSeriesComponent } from './list-series/list-series.component';

@NgModule({
  declarations: [
    SeriesComponent,
    ListSeriesComponent,
    MoreDetailsSerieComponent,
    SearchSeriesComponent,
    ListCardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SeriesRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    InfiniteScrollModule,
  ],
})
export class SeriesModule {}
