import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta10Page } from './consulta10.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta10PageRoutingModule {}
