import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta2PageRoutingModule } from './consulta2-routing.module';

import { Consulta2Page } from './consulta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta2PageRoutingModule
  ],
  declarations: [Consulta2Page]
})
export class Consulta2PageModule {}
