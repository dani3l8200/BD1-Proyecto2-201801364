import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta19Page } from './consulta19.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta19PageRoutingModule {}
