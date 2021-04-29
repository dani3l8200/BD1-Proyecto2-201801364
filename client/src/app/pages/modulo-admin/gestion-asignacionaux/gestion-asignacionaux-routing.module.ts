import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAsignacionauxPage } from './gestion-asignacionaux.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAsignacionauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAsignacionauxPageRoutingModule {}
