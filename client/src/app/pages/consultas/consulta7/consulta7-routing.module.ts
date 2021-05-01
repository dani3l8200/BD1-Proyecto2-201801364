import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta7Page } from './consulta7.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta7PageRoutingModule {}
