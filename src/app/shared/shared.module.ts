import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { BtnBackToTopComponent } from './components/btn-back-to-top/btn-back-to-top.component';
import { ShowBtnBelowVhDirective } from './directives/show-btn-below-vh/show-btn-below-vh.directive';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    BtnBackToTopComponent,
    ListCardsComponent,
    ShowBtnBelowVhDirective,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    InfiniteScrollModule,

    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [
    BtnBackToTopComponent,
    ListCardsComponent,
    ShowBtnBelowVhDirective,
    CarouselComponent,
  ],
})
export class SharedModule {}
