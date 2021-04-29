import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionReportesPage } from './gestion-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: GestionReportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionReportesPageRoutingModule {}
