import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reporte5Page } from './reporte5.page';

const routes: Routes = [
  {
    path: '',
    component: Reporte5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reporte5PageRoutingModule {}
