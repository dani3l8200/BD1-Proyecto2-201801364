import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginTemporalPage } from './login-temporal.page';

const routes: Routes = [
  {
    path: '',
    component: LoginTemporalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTemporalPageRoutingModule {}
