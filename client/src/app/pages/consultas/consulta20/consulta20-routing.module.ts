import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta20Page } from './consulta20.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta20PageRoutingModule {}
