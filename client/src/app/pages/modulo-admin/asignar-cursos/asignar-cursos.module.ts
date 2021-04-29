import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarCursosPageRoutingModule } from './asignar-cursos-routing.module';

import { AsignarCursosPage } from './asignar-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AsignarCursosPageRoutingModule
  ],
  declarations: [AsignarCursosPage]
})
export class AsignarCursosPageModule {}
