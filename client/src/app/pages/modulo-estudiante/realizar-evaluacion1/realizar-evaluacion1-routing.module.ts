import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarEvaluacion1Page } from './realizar-evaluacion1.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarEvaluacion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarEvaluacion1PageRoutingModule {}
