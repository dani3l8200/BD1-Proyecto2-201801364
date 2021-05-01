import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta15PageRoutingModule } from './consulta15-routing.module';

import { Consulta15Page } from './consulta15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta15PageRoutingModule
  ],
  declarations: [Consulta15Page]
})
export class Consulta15PageModule {}
