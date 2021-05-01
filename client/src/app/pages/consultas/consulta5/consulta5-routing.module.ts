import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta5Page } from './consulta5.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta5PageRoutingModule {}
