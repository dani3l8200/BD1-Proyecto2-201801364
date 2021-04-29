import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarEvaluacionPage } from './realizar-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarEvaluacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarEvaluacionPageRoutingModule {}
