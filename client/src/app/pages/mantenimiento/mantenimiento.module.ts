import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoPageRoutingModule } from './mantenimiento-routing.module';

import { MantenimientoPage } from './mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MantenimientoPageRoutingModule
  ],
  declarations: [MantenimientoPage]
})
export class MantenimientoPageModule {}
