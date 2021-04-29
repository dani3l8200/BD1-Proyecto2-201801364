import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaReporte1Page } from './tabla-reporte1.page';

const routes: Routes = [
  {
    path: '',
    component: TablaReporte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaReporte1PageRoutingModule {}
