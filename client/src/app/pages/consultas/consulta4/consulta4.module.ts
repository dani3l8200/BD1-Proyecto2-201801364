import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta4PageRoutingModule } from './consulta4-routing.module';

import { Consulta4Page } from './consulta4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta4PageRoutingModule
  ],
  declarations: [Consulta4Page]
})
export class Consulta4PageModule {}
