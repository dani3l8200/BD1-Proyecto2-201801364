import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta4Page } from './consulta4.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta4PageRoutingModule {}
