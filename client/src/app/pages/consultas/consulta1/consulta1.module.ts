import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta1PageRoutingModule } from './consulta1-routing.module';

import { Consulta1Page } from './consulta1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta1PageRoutingModule
  ],
  declarations: [Consulta1Page]
})
export class Consulta1PageModule {}
