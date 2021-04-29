import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAsignacionauxPageRoutingModule } from './gestion-asignacionaux-routing.module';

import { GestionAsignacionauxPage } from './gestion-asignacionaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GestionAsignacionauxPageRoutingModule
  ],
  declarations: [GestionAsignacionauxPage]
})
export class GestionAsignacionauxPageModule {}
