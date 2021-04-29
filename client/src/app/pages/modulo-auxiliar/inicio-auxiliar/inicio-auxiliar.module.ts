import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAuxiliarPageRoutingModule } from './inicio-auxiliar-routing.module';

import { InicioAuxiliarPage } from './inicio-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAuxiliarPageRoutingModule
  ],
  declarations: [InicioAuxiliarPage]
})
export class InicioAuxiliarPageModule {}
