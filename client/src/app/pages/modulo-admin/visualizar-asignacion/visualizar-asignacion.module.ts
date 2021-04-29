import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarAsignacionPageRoutingModule } from './visualizar-asignacion-routing.module';

import { VisualizarAsignacionPage } from './visualizar-asignacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualizarAsignacionPageRoutingModule
  ],
  declarations: [VisualizarAsignacionPage]
})
export class VisualizarAsignacionPageModule {}
