import { Mensajes } from './../modals-usuario/mensajes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MensajesService {

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

  crearMensajes(codigo_alumno:number,codigo_auxiliar:number,asunto:string,richtext:string,archivo:Blob){
    var data: Mensajes = new Mensajes(1,codigo_alumno,codigo_auxiliar,asunto,richtext,archivo);
    return this.http.post<Mensajes>('http://localhost:3000/CrearMensajes',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  ObtenerMensajes(): Observable<Mensajes[]>{
    return this.http.get<Mensajes[]>('http://localhost:3000/GetAllMessagees').pipe(
      catchError(this.handleError)
    );
  }
  
  ObtenerMensajesCuerpo(): Observable<Mensajes[]>{
    return this.http.get<Mensajes[]>('http://localhost:3000/getMenssages').pipe(
      catchError(this.handleError)
    );
  }
EliminarMensje(codigo_mensaje:number){
  return this.http.delete<Mensajes>('http://localhost:3000/DeleteMessage/'+codigo_mensaje).pipe(
    catchError(this.handleError)
  );

}

}
