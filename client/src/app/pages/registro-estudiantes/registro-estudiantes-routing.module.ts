import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistroEstudiantesPage } from './registro-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule ],
  exports: [RouterModule],
})
export class RegistroEstudiantesPageRoutingModule {}
