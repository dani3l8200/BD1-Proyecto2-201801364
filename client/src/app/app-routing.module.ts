import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./tab1/tab1.module").then((m) => m.Tab1PageModule),
  }, 
  {
    path: "inicio-admin",
    loadChildren: () =>
      import("./pages/inicio-admin/inicio-admin.module").then(
        (m) => m.InicioAdminPageModule
      ),
  },
  {
    path: 'consulta1',
    loadChildren: () => import('./pages/consultas/consulta1/consulta1.module').then( m => m.Consulta1PageModule)
  },
  {
    path: 'consulta2',
    loadChildren: () => import('./pages/consultas/consulta2/consulta2.module').then( m => m.Consulta2PageModule)
  },
  {
    path: 'consulta3',
    loadChildren: () => import('./pages/consultas/consulta3/consulta3.module').then( m => m.Consulta3PageModule)
  },
  {
    path: 'consulta4',
    loadChildren: () => import('./pages/consultas/consulta4/consulta4.module').then( m => m.Consulta4PageModule)
  },
  {
    path: 'consulta5',
    loadChildren: () => import('./pages/consultas/consulta5/consulta5.module').then( m => m.Consulta5PageModule)
  },
  {
    path: 'consulta6',
    loadChildren: () => import('./pages/consultas/consulta6/consulta6.module').then( m => m.Consulta6PageModule)
  },
  {
    path: 'consulta7',
    loadChildren: () => import('./pages/consultas/consulta7/consulta7.module').then( m => m.Consulta7PageModule)
  },
  {
    path: 'consulta8',
    loadChildren: () => import('./pages/consultas/consulta8/consulta8.module').then( m => m.Consulta8PageModule)
  },
  {
    path: 'consulta9',
    loadChildren: () => import('./pages/consultas/consulta9/consulta9.module').then( m => m.Consulta9PageModule)
  },
  {
    path: 'consulta10',
    loadChildren: () => import('./pages/consultas/consulta10/consulta10.module').then( m => m.Consulta10PageModule)
  },
  {
    path: 'consulta11',
    loadChildren: () => import('./pages/consultas/consulta11/consulta11.module').then( m => m.Consulta11PageModule)
  },
  {
    path: 'consulta12',
    loadChildren: () => import('./pages/consultas/consulta12/consulta12.module').then( m => m.Consulta12PageModule)
  },
  {
    path: 'consulta13',
    loadChildren: () => import('./pages/consultas/consulta13/consulta13.module').then( m => m.Consulta13PageModule)
  },
  {
    path: 'consulta14',
    loadChildren: () => import('./pages/consultas/consulta14/consulta14.module').then( m => m.Consulta14PageModule)
  },
  {
    path: 'consulta15',
    loadChildren: () => import('./pages/consultas/consulta15/consulta15.module').then( m => m.Consulta15PageModule)
  },
  {
    path: 'consulta16',
    loadChildren: () => import('./pages/consultas/consulta16/consulta16.module').then( m => m.Consulta16PageModule)
  },
  {
    path: 'consulta17',
    loadChildren: () => import('./pages/consultas/consulta17/consulta17.module').then( m => m.Consulta17PageModule)
  },
  {
    path: 'consulta18',
    loadChildren: () => import('./pages/consultas/consulta18/consulta18.module').then( m => m.Consulta18PageModule)
  },
  {
    path: 'consulta19',
    loadChildren: () => import('./pages/consultas/consulta19/consulta19.module').then( m => m.Consulta19PageModule)
  },
  {
    path: 'consulta20',
    loadChildren: () => import('./pages/consultas/consulta20/consulta20.module').then( m => m.Consulta20PageModule)
  },
  {
    path: 'pais',
    loadChildren: () => import('./pages/pais/pais.module').then( m => m.PaisPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pages/pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./pages/mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
