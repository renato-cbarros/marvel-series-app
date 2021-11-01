import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MainRoutingModule } from '../../main/main-routing.module';
import { DirectivesModule } from '../directives/directives.module';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { BtnBackToTopComponent } from './btn-back-to-top/btn-back-to-top.component';

@NgModule({
  declarations: [HeaderMenuComponent, FooterComponent, BtnBackToTopComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    DirectivesModule,
  ],
  exports: [HeaderMenuComponent, FooterComponent, BtnBackToTopComponent],
})
export class TemplatesModule {}
