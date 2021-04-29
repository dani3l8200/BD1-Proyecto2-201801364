import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaReporte2Page } from './tabla-reporte2.page';

const routes: Routes = [
  {
    path: '',
    component: TablaReporte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaReporte2PageRoutingModule {}
