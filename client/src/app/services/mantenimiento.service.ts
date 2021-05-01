import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Answer, UpdateAnswer, Inventos, UpdateInventos } from '../models/mantenimiento'
@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
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

  getAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>('http://34.74.1.140:3000/getRespuestas/').pipe(
      catchError(this.handleError)
    );
  };

  updateAwers(id_pregunta:number, id_respuesta:number):  Observable<UpdateAnswer>{
    let data: UpdateAnswer = new UpdateAnswer(id_respuesta);
    return this.http.put<UpdateAnswer>('http://34.74.1.140:3000/updateRespuesta/' + id_pregunta,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  getInventores(): Observable<Inventos[]> {
    return this.http.get<Inventos[]>('http://34.74.1.140:3000/getInventores/').pipe(
      catchError(this.handleError)
    );
  };

  updateInventores(id_invento: number, inventor: string, invento: string, anio_invento: number, id_inventor: number): Observable<UpdateInventos>{
    let data: UpdateInventos = new UpdateInventos(id_invento,inventor, invento, anio_invento, id_inventor);
    return this.http.put<UpdateInventos>('http://34.74.1.140:3000/updateInventos/',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };
}
