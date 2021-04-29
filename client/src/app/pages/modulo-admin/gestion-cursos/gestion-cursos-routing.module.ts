import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCursosPage } from './gestion-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCursosPageRoutingModule {}
