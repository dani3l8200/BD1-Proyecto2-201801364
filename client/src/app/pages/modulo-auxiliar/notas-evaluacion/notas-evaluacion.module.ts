import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasEvaluacionPageRoutingModule } from './notas-evaluacion-routing.module';

import { NotasEvaluacionPage } from './notas-evaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NotasEvaluacionPageRoutingModule
  ],
  declarations: [NotasEvaluacionPage]
})
export class NotasEvaluacionPageModule {}
