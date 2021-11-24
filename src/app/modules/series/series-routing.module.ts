import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSeriesComponent } from './list-series/list-series.component';
import { MoreDetailsSerieComponent } from './more-details-serie/more-details-serie.component';
import { SearchSeriesComponent } from './search-series/search-series.component';
import { SeriesComponent } from './series.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent,
    children: [
      { path: 'list', component: ListSeriesComponent },
      { path: 'search', component: SearchSeriesComponent },
      { path: 'search/more-datails/:id', component: MoreDetailsSerieComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesRoutingModule {}
