import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAuxPage } from './search-aux.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAuxPageRoutingModule {}
