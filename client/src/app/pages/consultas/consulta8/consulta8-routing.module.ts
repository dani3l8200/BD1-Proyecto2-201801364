import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta8Page } from './consulta8.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta8PageRoutingModule {}
