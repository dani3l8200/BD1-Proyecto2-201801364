import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consulta3PageRoutingModule } from './consulta3-routing.module';

import { Consulta3Page } from './consulta3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consulta3PageRoutingModule
  ],
  declarations: [Consulta3Page]
})
export class Consulta3PageModule {}
