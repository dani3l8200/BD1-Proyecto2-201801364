import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta13PageRoutingModule } from './consulta13-routing.module';

import { Consulta13Page } from './consulta13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta13PageRoutingModule
  ],
  declarations: [Consulta13Page]
})
export class Consulta13PageModule {}
