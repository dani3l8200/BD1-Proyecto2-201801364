import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta17PageRoutingModule } from './consulta17-routing.module';

import { Consulta17Page } from './consulta17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta17PageRoutingModule
  ],
  declarations: [Consulta17Page]
})
export class Consulta17PageModule {}
