import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta9PageRoutingModule } from './consulta9-routing.module';

import { Consulta9Page } from './consulta9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta9PageRoutingModule
  ],
  declarations: [Consulta9Page]
})
export class Consulta9PageModule {}
