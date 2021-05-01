import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta10PageRoutingModule } from './consulta10-routing.module';

import { Consulta10Page } from './consulta10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta10PageRoutingModule
  ],
  declarations: [Consulta10Page]
})
export class Consulta10PageModule {}
