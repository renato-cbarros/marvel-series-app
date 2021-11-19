import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainComponent } from './main.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainComponent, HeaderMenuComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MainModule {}
