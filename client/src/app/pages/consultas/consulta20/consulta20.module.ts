import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta20PageRoutingModule } from './consulta20-routing.module';

import { Consulta20Page } from './consulta20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta20PageRoutingModule
  ],
  declarations: [Consulta20Page]
})
export class Consulta20PageModule {}
