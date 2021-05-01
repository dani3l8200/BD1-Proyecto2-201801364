import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta13Page } from './consulta13.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta13PageRoutingModule {}
