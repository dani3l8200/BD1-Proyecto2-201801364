import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta17Page } from './consulta17.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta17PageRoutingModule {}
