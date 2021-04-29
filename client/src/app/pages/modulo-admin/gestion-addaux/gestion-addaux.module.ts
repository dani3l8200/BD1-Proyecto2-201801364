import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAddauxPageRoutingModule } from './gestion-addaux-routing.module';

import { GestionAddauxPage } from './gestion-addaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GestionAddauxPageRoutingModule
  ],
  declarations: [GestionAddauxPage]
})
export class GestionAddauxPageModule {}
