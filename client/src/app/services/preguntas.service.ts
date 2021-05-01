import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pregunta, AddPregunta, UpdatePregunta } from '../models/pregunta'

@Injectable({
  providedIn: 'root'
})

export class PreguntasService {
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

  addPregunta(pregunta:string, id_encuesta:number){
    let data: AddPregunta = new AddPregunta(pregunta, id_encuesta);
    return this.http.post<AddPregunta>('http://34.74.1.140:3000/addPregunta',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  updatePregunta(id: number, pregunta: string, id_encuesta: number): Observable<UpdatePregunta>{
    let data: UpdatePregunta = new UpdatePregunta(pregunta, id_encuesta);
    return this.http.put<UpdatePregunta>('http://34.74.1.140:3000/updatePregunta/'+id,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  removePregunta(id_pregunta:number): Observable<AddPregunta>{
    return this.http.delete<AddPregunta>('http://34.74.1.140:3000/removePregunta/'+id_pregunta).pipe(
      catchError(this.handleError)
    );
  };

  getPreguntas(): Observable<Pregunta[]>{
    return this.http.get<Pregunta[]>('http://34.74.1.140:3000/getPreguntas/').pipe(
      catchError(this.handleError)
    );
  };
}
