import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarCursosPage } from './asignar-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarCursosPageRoutingModule {}
