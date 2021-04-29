import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarEvaluacionPage } from './buscar-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarEvaluacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarEvaluacionPageRoutingModule {}
