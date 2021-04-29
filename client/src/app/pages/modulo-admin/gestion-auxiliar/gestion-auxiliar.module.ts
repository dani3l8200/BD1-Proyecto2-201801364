import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAuxiliarPageRoutingModule } from './gestion-auxiliar-routing.module';

import { GestionAuxiliarPage } from './gestion-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAuxiliarPageRoutingModule
  ],
  declarations: [GestionAuxiliarPage]
})
export class GestionAuxiliarPageModule {}
