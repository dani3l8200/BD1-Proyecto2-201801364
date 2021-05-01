import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta16PageRoutingModule } from './consulta16-routing.module';

import { Consulta16Page } from './consulta16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta16PageRoutingModule
  ],
  declarations: [Consulta16Page]
})
export class Consulta16PageModule {}
