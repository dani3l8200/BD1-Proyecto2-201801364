import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AsignacionCursosPageRoutingModule } from './asignacion-cursos-routing.module';

import { AsignacionCursosPage } from './asignacion-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AsignacionCursosPageRoutingModule
  ],
  declarations: [AsignacionCursosPage]
})
export class AsignacionCursosPageModule {}
