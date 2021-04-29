import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasEvaluacionPage } from './notas-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: NotasEvaluacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasEvaluacionPageRoutingModule {}
