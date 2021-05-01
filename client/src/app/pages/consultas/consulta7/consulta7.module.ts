import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta7PageRoutingModule } from './consulta7-routing.module';

import { Consulta7Page } from './consulta7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta7PageRoutingModule
  ],
  declarations: [Consulta7Page]
})
export class Consulta7PageModule {}
