import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionPageRoutingModule } from './seccion-routing.module';

import { SeccionPage } from './seccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SeccionPageRoutingModule
  ],
  declarations: [SeccionPage]
})
export class SeccionPageModule {}
