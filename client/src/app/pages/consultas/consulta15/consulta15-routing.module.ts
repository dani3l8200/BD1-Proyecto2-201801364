import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta15Page } from './consulta15.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta15PageRoutingModule {}
