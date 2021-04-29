import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarAsignacionPage } from './visualizar-asignacion.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarAsignacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarAsignacionPageRoutingModule {}
