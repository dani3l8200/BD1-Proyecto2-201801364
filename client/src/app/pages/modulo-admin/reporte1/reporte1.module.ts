import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reporte1PageRoutingModule } from './reporte1-routing.module';

import { Reporte1Page } from './reporte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Reporte1PageRoutingModule
  ],
  declarations: [Reporte1Page]
})
export class Reporte1PageModule {}
