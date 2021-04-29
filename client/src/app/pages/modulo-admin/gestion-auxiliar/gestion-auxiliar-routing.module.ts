import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAuxiliarPage } from './gestion-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAuxiliarPageRoutingModule {}
