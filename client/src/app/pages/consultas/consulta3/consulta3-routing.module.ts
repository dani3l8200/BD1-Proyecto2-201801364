import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta3Page } from './consulta3.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta3PageRoutingModule {}
