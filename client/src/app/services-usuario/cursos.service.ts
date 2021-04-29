import { VerAsignacion } from './../modals-usuario/verAsignacion';
import { AsignacionCurso } from './../modals-usuario/asignacionCurso';

import { Seccion } from './../modals-usuario/seccion';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {UpdateCurso} from 'src/app/modals-usuario/UpdateCurso';
import {Cursos} from 'src/app/modals-usuario/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

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

  crearCursos(nombre:string,descripcion:string,estado:number,codigo_unico:number){
    var data: Cursos = new Cursos(1,nombre,descripcion,estado,codigo_unico);
    return this.http.post<Cursos>('http://localhost:3000/agregarCursos',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );

  }
  ActualizarCursos(codigo_curso:number,nombre:string,descripcion:string,estado:number): Observable<UpdateCurso>{
    var data: UpdateCurso = new UpdateCurso(1,nombre,descripcion,estado);
    return this.http.put<UpdateCurso>('http://localhost:3000/updateCursos/'+codigo_curso,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  EliminarCursos(codigo_curso:number): Observable<Cursos>{
    return this.http.delete<Cursos>('http://localhost:3000/deleteCursos/'+codigo_curso).pipe(
      catchError(this.handleError)
    );
  }
 ObtenerCursos(): Observable<Cursos[]>{
  return this.http.get<Cursos[]>('http://localhost:3000/listCursos').pipe(
    catchError(this.handleError)
  );
 }
 crearSecciones(lseccion:string){
 var data: Seccion = new Seccion(1,lseccion);
 return this.http.post<Seccion>('http://localhost:3000/agregarSecciones',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
 } 
 ActualizarSecciones(codigo_seccion:number,lseccion:string){
   var data: Seccion = new Seccion(1,lseccion);
   return this.http.put<Seccion>('http://localhost:3000/editarSecciones/'+codigo_seccion,data,this.httpOptions).pipe(
    catchError(this.handleError)
  );
 }
 ObtenerSecciones(): Observable<Seccion[]>{
  return this.http.get<Seccion[]>('http://localhost:3000/listSeccion').pipe(
    catchError(this.handleError)
  );

 }
 CrearAsignacionCursos(semestre: string, year_: number,horaInicio: string,horaFin: string,fechalimit: string,codigo_curso: number,codigo_seccion: number){
var data: AsignacionCurso = new AsignacionCurso(1,semestre,year_,horaInicio,horaFin,fechalimit,codigo_curso,codigo_seccion)
return this.http.post<AsignacionCurso>('http://localhost:3000/AssignamentCursesForSection',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
}
ActualizarAsignacionCursos(codigo_detallescurso:number,semestre:string,year_:number,horaInicio:string,horaFin:string,fechalimit:string,codigo_curso:number,codigo_seccion:number){
 var data: AsignacionCurso = new AsignacionCurso(1,semestre,year_,horaInicio,horaFin,fechalimit,codigo_curso,codigo_seccion);
 return this.http.put<AsignacionCurso>('http://localhost:3000/UpdateDetailsCourses/'+codigo_detallescurso,data,this.httpOptions).pipe(
  catchError(this.handleError)
);
}
ObterAsignacionesCursos(): Observable<VerAsignacion[]>{
  return this.http.get<VerAsignacion[]>('http://localhost:3000/MyAssignaments').pipe(
    catchError(this.handleError)
  );
}

EliminarAsignacionCursos(codigo_detallescurso:number): Observable<AsignacionCurso>{
  return this.http.delete<AsignacionCurso>('http://localhost:3000/DeleteDatailsCourse/'+codigo_detallescurso).pipe(
      catchError(this.handleError)
    ); 
}

}
