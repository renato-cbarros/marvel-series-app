import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowBtnBelowVhDirective } from './show-btn-below-vh/show-btn-below-vh.directive';

@NgModule({
  declarations: [ShowBtnBelowVhDirective],
  imports: [CommonModule],
  exports: [ShowBtnBelowVhDirective],
})
export class DirectivesModule {}
