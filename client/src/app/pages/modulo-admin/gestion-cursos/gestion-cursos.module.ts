import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCursosPageRoutingModule } from './gestion-cursos-routing.module';

import { GestionCursosPage } from './gestion-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCursosPageRoutingModule
  ],
  declarations: [GestionCursosPage]
})
export class GestionCursosPageModule {}
