import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEvaluacionPage } from './gestion-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEvaluacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEvaluacionPageRoutingModule {}
