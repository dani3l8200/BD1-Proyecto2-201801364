import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaReporte2PageRoutingModule } from './tabla-reporte2-routing.module';

import { TablaReporte2Page } from './tabla-reporte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaReporte2PageRoutingModule
  ],
  declarations: [TablaReporte2Page]
})
export class TablaReporte2PageModule {}
