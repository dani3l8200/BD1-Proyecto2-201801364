import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta11PageRoutingModule } from './consulta11-routing.module';

import { Consulta11Page } from './consulta11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta11PageRoutingModule
  ],
  declarations: [Consulta11Page]
})
export class Consulta11PageModule {}
