import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddFrontera, AddPais, Frontera, Pais } from '../models/pais'
@Injectable({
  providedIn: 'root'
})
export class PaisService {

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

  addFrontera(id_pais: number, check_frontera: number, norte: string, sur: string, este: string, oeste: string){
    let data: AddFrontera = new AddFrontera(id_pais, check_frontera, norte, sur, este, oeste);
    return this.http.post<AddFrontera>('http://34.74.1.140:3000/addFrontera',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  getFronteras(): Observable<Frontera[]>{
    return this.http.get<Frontera[]>('http://34.74.1.140:3000/getFronteras/').pipe(
      catchError(this.handleError)
    );
  };

  updateFronteras(id_frontera:number,id_pais: number, check_frontera: number, norte: string, sur: string, este: string, oeste: string): Observable<AddFrontera>{
    let data: AddFrontera = new AddFrontera(id_pais, check_frontera, norte, sur, este, oeste);
    return this.http.put<AddFrontera>('http://34.74.1.140:3000/updateFronteras/'+id_frontera,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  removeFronteras(id_frontera:number): Observable<AddFrontera>{
    return this.http.delete<AddFrontera>('http://34.74.1.140:3000/removeFrontera/'+id_frontera).pipe(
      catchError(this.handleError)
    );
  };

  addPaises(pais: string, capital: string, poblacion: number, area_km2: number, id_region: number){
    let data: AddPais = new AddPais(pais, capital,poblacion,area_km2, id_region);
    return this.http.post<AddPais>('http://34.74.1.140:3000/addPais',data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  getPaises(): Observable<Pais[]>{
    return this.http.get<Pais[]>('http://34.74.1.140:3000/getPaises/').pipe(
      catchError(this.handleError)
    );
  };

  updatePaises(id_pais:number, pais: string, capital: string, poblacion: number, area_km2: number, id_region: number): Observable<AddPais>{
    let data: AddPais = new AddPais(pais, capital,poblacion,area_km2, id_region);
    return this.http.put<AddPais>('http://34.74.1.140:3000/updatePais/'+id_pais,data,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  removePaises(id_pais:number): Observable<AddPais>{
    return this.http.delete<AddPais>('http://34.74.1.140:3000/removePais/'+id_pais).pipe(
      catchError(this.handleError)
    );
  };
}
