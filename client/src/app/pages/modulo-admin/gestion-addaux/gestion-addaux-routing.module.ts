import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAddauxPage } from './gestion-addaux.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAddauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAddauxPageRoutingModule {}
