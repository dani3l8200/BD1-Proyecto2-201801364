import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta5PageRoutingModule } from './consulta5-routing.module';

import { Consulta5Page } from './consulta5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta5PageRoutingModule
  ],
  declarations: [Consulta5Page]
})
export class Consulta5PageModule {}
