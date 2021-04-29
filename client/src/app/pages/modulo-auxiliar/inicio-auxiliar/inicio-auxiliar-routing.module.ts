import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAuxiliarPage } from './inicio-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAuxiliarPageRoutingModule {}
