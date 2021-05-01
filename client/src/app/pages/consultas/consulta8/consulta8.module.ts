import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta8PageRoutingModule } from './consulta8-routing.module';

import { Consulta8Page } from './consulta8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta8PageRoutingModule
  ],
  declarations: [Consulta8Page]
})
export class Consulta8PageModule {}
