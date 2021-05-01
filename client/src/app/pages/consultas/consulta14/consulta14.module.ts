import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta14PageRoutingModule } from './consulta14-routing.module';

import { Consulta14Page } from './consulta14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta14PageRoutingModule
  ],
  declarations: [Consulta14Page]
})
export class Consulta14PageModule {}
