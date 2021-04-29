import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionReportesPageRoutingModule } from './gestion-reportes-routing.module';

import { GestionReportesPage } from './gestion-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionReportesPageRoutingModule
  ],
  declarations: [GestionReportesPage]
})
export class GestionReportesPageModule {}
