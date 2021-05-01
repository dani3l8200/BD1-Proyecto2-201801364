import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta1Page } from './consulta1.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta1PageRoutingModule {}
