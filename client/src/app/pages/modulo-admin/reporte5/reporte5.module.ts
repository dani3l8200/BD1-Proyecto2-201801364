import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reporte5PageRoutingModule } from './reporte5-routing.module';

import { Reporte5Page } from './reporte5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reporte5PageRoutingModule
  ],
  declarations: [Reporte5Page]
})
export class Reporte5PageModule {}
