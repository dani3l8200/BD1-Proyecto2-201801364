import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarEvaluacion1PageRoutingModule } from './realizar-evaluacion1-routing.module';

import { RealizarEvaluacion1Page } from './realizar-evaluacion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RealizarEvaluacion1PageRoutingModule
  ],
  declarations: [RealizarEvaluacion1Page]
})
export class RealizarEvaluacion1PageModule {}
