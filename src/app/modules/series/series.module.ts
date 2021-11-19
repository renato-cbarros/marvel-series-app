import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SeriesRoutingModule } from './series-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SeriesComponent } from './series.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import { MoreDetailsSerieComponent } from './more-details-serie/more-details-serie.component';
import { SearchSeriesComponent } from './search-series/search-series.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SeriesComponent,
    ListSeriesComponent,
    MoreDetailsSerieComponent,
    SearchSeriesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SeriesRoutingModule,
    SharedModule,

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
