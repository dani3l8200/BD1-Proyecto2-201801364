import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarEvaluacionPageRoutingModule } from './buscar-evaluacion-routing.module';

import { BuscarEvaluacionPage } from './buscar-evaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BuscarEvaluacionPageRoutingModule
  ],
  declarations: [BuscarEvaluacionPage]
})
export class BuscarEvaluacionPageModule {}
