import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionPageRoutingModule } from './evaluacion-routing.module';

import { EvaluacionPage } from './evaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    EvaluacionPageRoutingModule
  ],
  declarations: [EvaluacionPage]
})
export class EvaluacionPageModule {}
