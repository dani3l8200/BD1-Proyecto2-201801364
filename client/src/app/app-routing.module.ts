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
    path: "registro-estudiantes",
    loadChildren: () =>
      import("./pages/registro-estudiantes/registro-estudiantes.module").then(
        (m) => m.RegistroEstudiantesPageModule
      ),
  },
  {
    path: "recuperar-password",
    loadChildren: () =>
      import("./pages/recuperar-password/recuperar-password.module").then(
        (m) => m.RecuperarPasswordPageModule
      ),
  },
  {
    path: "login-temporal",
    loadChildren: () =>
      import("./pages/login-temporal/login-temporal.module").then(
        (m) => m.LoginTemporalPageModule
      ),
  },
  {
    path: "cambiar-password",
    loadChildren: () =>
      import("./pages/cambiar-password/cambiar-password.module").then(
        (m) => m.CambiarPasswordPageModule
      ),
  },
  {
    path: "inicio-admin",
    loadChildren: () =>
      import("./pages/modulo-admin/inicio-admin/inicio-admin.module").then(
        (m) => m.InicioAdminPageModule
      ),
  },
  {
    path: "gestion-cursos",
    loadChildren: () =>
      import("./pages/modulo-admin/gestion-cursos/gestion-cursos.module").then(
        (m) => m.GestionCursosPageModule
      ),
  },
  {
    path: "cursos",
    loadChildren: () =>
      import("./pages/modulo-admin/cursos/cursos.module").then(
        (m) => m.CursosPageModule
      ),
  },
  {
    path: "seccion",
    loadChildren: () =>
      import("./pages/modulo-admin/seccion/seccion.module").then(
        (m) => m.SeccionPageModule
      ),
  },
  {
    path: "asignar-cursos",
    loadChildren: () =>
      import("./pages/modulo-admin/asignar-cursos/asignar-cursos.module").then(
        (m) => m.AsignarCursosPageModule
      ),
  },
  {
    path: "gestion-auxiliar",
    loadChildren: () =>
      import(
        "./pages/modulo-admin/gestion-auxiliar/gestion-auxiliar.module"
      ).then((m) => m.GestionAuxiliarPageModule),
  },
  {
    path: "gestion-addaux",
    loadChildren: () =>
      import("./pages/modulo-admin/gestion-addaux/gestion-addaux.module").then(
        (m) => m.GestionAddauxPageModule
      ),
  },
  {
    path: "gestion-asignacionaux",
    loadChildren: () =>
      import(
        "./pages/modulo-admin/gestion-asignacionaux/gestion-asignacionaux.module"
      ).then((m) => m.GestionAsignacionauxPageModule),
  },
  {
    path: "visualizar-asignacion",
    loadChildren: () =>
      import(
        "./pages/modulo-admin/visualizar-asignacion/visualizar-asignacion.module"
      ).then((m) => m.VisualizarAsignacionPageModule),
  },
  {
    path: "search-aux",
    loadChildren: () =>
      import("./pages/modulo-admin/search-aux/search-aux.module").then(
        (m) => m.SearchAuxPageModule
      ),
  },
  {
    path: "inicio-estudiante",
    loadChildren: () =>
      import(
        "./pages/modulo-estudiante/inicio-estudiante/inicio-estudiante.module"
      ).then((m) => m.InicioEstudiantePageModule),
  },
  {
    path: "asignacion-cursos",
    loadChildren: () =>
      import(
        "./pages/modulo-estudiante/asignacion-cursos/asignacion-cursos.module"
      ).then((m) => m.AsignacionCursosPageModule),
  },
  {
    path: "mensajes",
    loadChildren: () =>
      import("./pages/modulo-estudiante/mensajes/mensajes.module").then(
        (m) => m.MensajesPageModule
      ),
  },
  {
    path: "publicacion",
    loadChildren: () =>
      import("./pages/modulo-estudiante/publicacion/publicacion.module").then(
        (m) => m.PublicacionPageModule
      ),
  },
  {
    path: "inicio-auxiliar",
    loadChildren: () =>
      import(
        "./pages/modulo-auxiliar/inicio-auxiliar/inicio-auxiliar.module"
      ).then((m) => m.InicioAuxiliarPageModule),
  },
  {
    path: "gestion-evaluacion",
    loadChildren: () =>
      import(
        "./pages/modulo-auxiliar/gestion-evaluacion/gestion-evaluacion.module"
      ).then((m) => m.GestionEvaluacionPageModule),
  },
  {
    path: "evaluacion",
    loadChildren: () =>
      import("./pages/modulo-auxiliar/evaluacion/evaluacion.module").then(
        (m) => m.EvaluacionPageModule
      ),
  },
  {
    path: "preguntas",
    loadChildren: () =>
      import("./pages/modulo-auxiliar/preguntas/preguntas.module").then(
        (m) => m.PreguntasPageModule
      ),
  },
  {
    path: "respuestas",
    loadChildren: () =>
      import("./pages/modulo-auxiliar/respuestas/respuestas.module").then(
        (m) => m.RespuestasPageModule
      ),
  },
  {
    path: "notas-evaluacion",
    loadChildren: () =>
      import(
        "./pages/modulo-auxiliar/notas-evaluacion/notas-evaluacion.module"
      ).then((m) => m.NotasEvaluacionPageModule),
  },
  {
    path: "buscar-evaluacion",
    loadChildren: () =>
      import(
        "./pages/modulo-estudiante/buscar-evaluacion/buscar-evaluacion.module"
      ).then((m) => m.BuscarEvaluacionPageModule),
  },
  {
    path: "realizar-evaluacion",
    loadChildren: () =>
      import(
        "./pages/modulo-estudiante/realizar-evaluacion/realizar-evaluacion.module"
      ).then((m) => m.RealizarEvaluacionPageModule),
  },
  {
    path: "realizar-evaluacion1",
    loadChildren: () =>
      import(
        "./pages/modulo-estudiante/realizar-evaluacion1/realizar-evaluacion1.module"
      ).then((m) => m.RealizarEvaluacion1PageModule),
  },
  {
    path: "notas",
    loadChildren: () =>
      import("./pages/modulo-estudiante/notas/notas.module").then(
        (m) => m.NotasPageModule
      ),
  },
  {
    path: "gestion-reportes",
    loadChildren: () =>
      import(
        "./pages/modulo-admin/gestion-reportes/gestion-reportes.module"
      ).then((m) => m.GestionReportesPageModule),
  },
  {
    path: "reporte1",
    loadChildren: () =>
      import("./pages/modulo-admin/reporte1/reporte1.module").then(
        (m) => m.Reporte1PageModule
      ),
  },
  {
    path: "reporte2",
    loadChildren: () =>
      import("./pages/modulo-admin/reporte2/reporte2.module").then(
        (m) => m.Reporte2PageModule
      ),
  },
  {
    path: "reporte3",
    loadChildren: () =>
      import("./pages/modulo-admin/reporte3/reporte3.module").then(
        (m) => m.Reporte3PageModule
      ),
  },
  {
    path: "reporte5",
    loadChildren: () =>
      import("./pages/modulo-admin/reporte5/reporte5.module").then(
        (m) => m.Reporte5PageModule
      ),
  },
  {
    path: "tabla-reporte1",
    loadChildren: () =>
      import("./pages/modulo-admin/tabla-reporte1/tabla-reporte1.module").then(
        (m) => m.TablaReporte1PageModule
      ),
  },
  {
    path: "tabla-reporte2",
    loadChildren: () =>
      import("./pages/modulo-admin/tabla-reporte2/tabla-reporte2.module").then(
        (m) => m.TablaReporte2PageModule
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
