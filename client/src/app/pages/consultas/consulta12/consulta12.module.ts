import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta12PageRoutingModule } from './consulta12-routing.module';

import { Consulta12Page } from './consulta12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta12PageRoutingModule
  ],
  declarations: [Consulta12Page]
})
export class Consulta12PageModule {}
