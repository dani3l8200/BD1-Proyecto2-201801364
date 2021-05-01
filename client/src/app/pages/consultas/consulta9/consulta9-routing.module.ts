import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta9Page } from './consulta9.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta9PageRoutingModule {}
