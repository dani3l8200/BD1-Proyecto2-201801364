import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta2Page } from './consulta2.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta2PageRoutingModule {}
