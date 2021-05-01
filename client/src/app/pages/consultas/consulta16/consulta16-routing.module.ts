import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consulta16Page } from './consulta16.page';

const routes: Routes = [
  {
    path: '',
    component: Consulta16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consulta16PageRoutingModule {}
