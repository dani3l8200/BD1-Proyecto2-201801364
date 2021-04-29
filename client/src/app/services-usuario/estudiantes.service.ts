import { ObtenerAsignacionesEstudiantes } from './../modals-usuario/ObtenerAsignacionesEstudiantes';
import { AsignacionEstudiante } from './../modals-usuario/asignacionEstudiante';
import { ObtenerAuxiliares } from './../modals-usuario/ObtenerAuxiliares';
import { DesasignacionAux } from './../modals-usuario/DesasignacionAux';
import { AsignacionAux } from './../modals-usuario/AsignacionAux';
import { Auxiliar } from './../modals-usuario/auxiliar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Usuario} from 'src/app/modals-usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: `, error.error);
    }
    return throwError(
      'Algo malo sucedio, por favor intentarlo más tarde D:');
  };

  crearStudents(nombre:string,apellido:string,carne:number,correo_electronico:string,password_:string,rol:number){
    var data: Usuario = new Usuario(1,nombre,apellido,carne,correo_electronico,password_,rol);
    return this.http.post<Usuario>('http://localhost:3000/RegisterStudents',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  BuscarEstudiantes(rol:number): Observable<Usuario[]>{
  return this.http.get<Usuario[]>('http://localhost:3000/SearchStudents/'+rol).pipe(
    catchError(this.handleError)
  );
  }
  CrearAuxiliares(codigo_estudiante:number,carne:number,rol:number,password_:string){
    var data: Auxiliar = new Auxiliar(1,carne,rol,password_);
    return this.http.put<Auxiliar>('http://localhost:3000/RegisterAux/'+codigo_estudiante,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  MostarAuxiliares(rol:number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:3000/SearchStudents/'+rol).pipe(
      catchError(this.handleError)
    );
    }
  AsigancionAuxiliares(codigo_estudiante:number,codigo_detallescurso:number){
    var data: AsignacionAux = new AsignacionAux(1,codigo_estudiante,codigo_detallescurso);
    return this.http.post<AsignacionAux>('http://localhost:3000/AsignamentAuxiliar',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  DesasignacionAuxiliares(codigo_asignacionaux:number,estado:number,motivo:string){
    var data: DesasignacionAux = new DesasignacionAux(1,estado,motivo);
    return this.http.put<DesasignacionAux>('http://localhost:3000/DeleteAuxliarForReason/'+codigo_asignacionaux,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  ActualizarAuxiliar(codigo_asignacionaux:number,codigo_estudiante:number,codigo_detallescurso:number){
    var data: AsignacionAux = new AsignacionAux(1,codigo_estudiante,codigo_detallescurso);
    return this.http.put<AsignacionAux>('http://localhost:3000/UpdateAuxiliarCourse/'+codigo_asignacionaux,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  ObtenerAsignacionAuxiliar(): Observable<ObtenerAuxiliares[]>{
    return this.http.get<ObtenerAuxiliares[]>('http://localhost:3000/ObtainAllAuxiliares/').pipe(
      catchError(this.handleError)
    );
  }

  BuscarAuxiliarPorCurso(codigo_detallescurso:number){
    return this.http.get<ObtenerAuxiliares>('http://localhost:3000/SearchAuxiliarForCourse/'+codigo_detallescurso).pipe(
      catchError(this.handleError)
    );
  }
  BuscarAuxiliarPorNombre(codigo_estudiante:number){
    return this.http.get<ObtenerAuxiliares>('http://localhost:3000/SearchAuxiliarForName/'+codigo_estudiante).pipe(
      catchError(this.handleError)
    );
  }

  AsigancionEstudiante(codigo_estudiante:number,codigo_detallescurso:number){
    var data: AsignacionAux = new AsignacionAux(1,codigo_estudiante,codigo_detallescurso);
    return this.http.post<AsignacionAux>('http://localhost:3000/AsignarStudent',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  EliminarAsignacionEstudiante(codigo_detallescurso:number,codigo_asignacionstudent:number,codigo_estudiante:number){
 
    return this.http.delete<AsignacionEstudiante>('http://localhost:3000/DeleteAsignamentStudent/'+codigo_asignacionstudent+'/'+codigo_detallescurso+'/'+codigo_estudiante).pipe(
      catchError(this.handleError)
    );
  }

  ObtenerEstudiantesAsignados(codigo_estudiante:string): Observable<ObtenerAsignacionesEstudiantes[]>{
    return this.http.get<ObtenerAsignacionesEstudiantes[]>('http://localhost:3000/ObtainAllCourseForStudent/'+codigo_estudiante).pipe(
      catchError(this.handleError)
    );
  }
}
