import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarEvaluacionPageRoutingModule } from './realizar-evaluacion-routing.module';

import { RealizarEvaluacionPage } from './realizar-evaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RealizarEvaluacionPageRoutingModule
  ],
  declarations: [RealizarEvaluacionPage]
})
export class RealizarEvaluacionPageModule {}
