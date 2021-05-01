import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta18PageRoutingModule } from './consulta18-routing.module';

import { Consulta18Page } from './consulta18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta18PageRoutingModule
  ],
  declarations: [Consulta18Page]
})
export class Consulta18PageModule {}
