import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEvaluacionPageRoutingModule } from './gestion-evaluacion-routing.module';

import { GestionEvaluacionPage } from './gestion-evaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEvaluacionPageRoutingModule
  ],
  declarations: [GestionEvaluacionPage]
})
export class GestionEvaluacionPageModule {}
