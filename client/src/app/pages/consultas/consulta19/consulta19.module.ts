import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta19PageRoutingModule } from './consulta19-routing.module';

import { Consulta19Page } from './consulta19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta19PageRoutingModule
  ],
  declarations: [Consulta19Page]
})
export class Consulta19PageModule {}
