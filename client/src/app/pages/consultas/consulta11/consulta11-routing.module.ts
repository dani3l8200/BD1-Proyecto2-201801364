import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta11Page } from './consulta11.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta11PageRoutingModule {}
