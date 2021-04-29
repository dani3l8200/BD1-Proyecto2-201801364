import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTemporalPageRoutingModule } from './login-temporal-routing.module';

import { LoginTemporalPage } from './login-temporal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginTemporalPageRoutingModule
  ],
  declarations: [LoginTemporalPage]
})
export class LoginTemporalPageModule {}
