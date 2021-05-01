import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta6PageRoutingModule } from './consulta6-routing.module';

import { Consulta6Page } from './consulta6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta6PageRoutingModule
  ],
  declarations: [Consulta6Page]
})
export class Consulta6PageModule {}
