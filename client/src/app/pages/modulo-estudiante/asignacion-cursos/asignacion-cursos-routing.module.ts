import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignacionCursosPage } from './asignacion-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: AsignacionCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignacionCursosPageRoutingModule {}
