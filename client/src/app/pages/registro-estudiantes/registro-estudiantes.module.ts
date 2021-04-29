import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';

import { RegistroEstudiantesPageRoutingModule } from './registro-estudiantes-routing.module';

import { RegistroEstudiantesPage } from './registro-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroEstudiantesPageRoutingModule
  ],
  declarations: [RegistroEstudiantesPage]
})
export class RegistroEstudiantesPageModule {}
