import { ObtenerPunteoEvaluacion } from './../modals-usuario/ObtenerPunteoEvaluacion';
import { Respuesta } from './../modals-usuario/Respuesta';
import { UpdatePreguntas } from './../modals-usuario/UpdatePreguntas';
import { Preguntas } from './../modals-usuario/preguntas';
import { UpdateEvaluacion } from './../modals-usuario/UpdateEvaluacion';
import { Evaluacion } from './../modals-usuario/evaluacion';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ObtenerPreguntas} from 'src/app/modals-usuario/ObtenerPreguntas';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

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
  crearEvaluacion(nombre:string,punteo:number,codigo_detallescurso:number){
    var data: Evaluacion = new Evaluacion(1,nombre,punteo,codigo_detallescurso);
    return this.http.post<Evaluacion>('http://localhost:3000/CrearEvaluacion',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  ObtenerEvaluacion(): Observable<UpdateEvaluacion[]>{
    return this.http.get<UpdateEvaluacion[]>('http://localhost:3000/ObtenerTodasEvaluaciones').pipe(
      catchError(this.handleError)
    );
  }

  ActualizarEvaluacion(codigo_evaluacion:number,nombre:string,habilitar:number,aleatorio:number,punteo:number,codigo_detallescurso:number){
    var data: UpdateEvaluacion = new UpdateEvaluacion(1,nombre,habilitar,aleatorio,punteo,codigo_detallescurso);
    return this.http.put<UpdateEvaluacion>('http://localhost:3000/UpdateEvaluacion/'+codigo_evaluacion,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  EliminarEvaluacion(codigo_evaluacion:number){
    return this.http.delete<UpdateEvaluacion>('http://localhost:3000/EliminarEvaluacion/'+codigo_evaluacion).pipe(
      catchError(this.handleError)
    );

  

  }
  ObtenerPreguntas(): Observable<Preguntas[]>{
    return this.http.get<Preguntas[]>('http://localhost:3000/AllPreguntas').pipe(
      catchError(this.handleError)
    );
  }
  ObtenerPreguntasPorEvaluacion(codigo_evaluacion:number): Observable<Preguntas[]>{
    return this.http.get<Preguntas[]>('http://localhost:3000/PreguntasPorEvaluacion/'+codigo_evaluacion).pipe(
      catchError(this.handleError)
    );

  }
  ObtenerPreguntasPorEvaluacion1(codigo_evaluacion:string): Observable<ObtenerPreguntas[]>{
    return this.http.get<ObtenerPreguntas[]>('http://localhost:3000/PreguntasPorEvaluacion/'+codigo_evaluacion).pipe(
      catchError(this.handleError)
    );

  }
  ObtenerPreguntasRandom(codigo_evaluacion:number): Observable<Preguntas[]>{
    return this.http.get<Preguntas[]>('http://localhost:3000/PreguntasAleatorias/'+codigo_evaluacion).pipe(
      catchError(this.handleError)
    );
  }
  ObtenerPreguntasRandom1(idGet:string): Observable<ObtenerPreguntas[]>{
    return this.http.get<ObtenerPreguntas[]>('http://localhost:3000/PreguntasAleatorias/'+idGet).pipe(
      catchError(this.handleError)
    );
  }
  
  
  CrearPreguntas(tipo:string,pregunta:string,respuesta1:string,respuesta2:string,respuesta3:string,correcta:string,punteo:number,codigo_evaluacion:number){
   var data: Preguntas = new Preguntas(1,tipo,pregunta,respuesta1,respuesta2,respuesta3,correcta,punteo,codigo_evaluacion);
   return this.http.post<Preguntas>('http://localhost:3000/CrearPreguntas',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  ActualizarPreguntas(codigo_pregunta:number,tipo:string,pregunta:string,respuesta1:string,respuesta2:string,respuesta3:string,correcta:string,punteo:number){
    var data: UpdatePreguntas = new UpdatePreguntas(1,tipo,pregunta,respuesta1,respuesta2,respuesta3,correcta,punteo);
    return this.http.put<UpdatePreguntas>('http://localhost:3000/ActualizarPreguntas/'+codigo_pregunta,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  EliminarPreguntas(codigo_pregunta:number){
    return this.http.delete<Preguntas>('http://localhost:3000/DeletePreguntas/'+codigo_pregunta).pipe(
      catchError(this.handleError)
    );
  }
  ObtenerRespuesta(codigo_estudiante:string): Observable<ObtenerPunteoEvaluacion[]>{
    return this.http.get<ObtenerPunteoEvaluacion[]>('http://localhost:3000/ResultadoRespuesta/'+codigo_estudiante).pipe(
      catchError(this.handleError)
    );
  }
  ObtenerRespuesta1(codigo_estudiante:number): Observable<ObtenerPunteoEvaluacion[]>{
    return this.http.get<ObtenerPunteoEvaluacion[]>('http://localhost:3000/ResultadoRespuesta/'+codigo_estudiante).pipe(
      catchError(this.handleError)
    );
  }
  RealizarEvaluacion(respuesta:string,punteo:number,codigo_pregunta:number,codigo_evaluacion:number,codigo_estudiante:number,){
  var data: Respuesta = new Respuesta(1,respuesta,punteo,codigo_pregunta,codigo_evaluacion,codigo_estudiante);
  return this.http.post<Respuesta>('http://localhost:3000/InsertarRespuesta',data,this.httpOptions).pipe(
    catchError(this.handleError)
  );
  }

}
