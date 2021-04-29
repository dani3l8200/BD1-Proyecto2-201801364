import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaReporte1PageRoutingModule } from './tabla-reporte1-routing.module';

import { TablaReporte1Page } from './tabla-reporte1.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    TablaReporte1PageRoutingModule
  ],
  declarations: [TablaReporte1Page]
})
export class TablaReporte1PageModule {}
