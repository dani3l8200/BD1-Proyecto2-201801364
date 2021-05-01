import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta14Page } from './consulta14.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta14PageRoutingModule {}
