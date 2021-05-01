import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta12Page } from './consulta12.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta12PageRoutingModule {}
