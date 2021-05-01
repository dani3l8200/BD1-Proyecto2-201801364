import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta18Page } from './consulta18.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta18PageRoutingModule {}
