import { Usuario } from './../modals-usuario/usuario';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Login} from 'src/app/modals-usuario/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
  
  login(correo_electronico:string,password_:string){
    return this.http.post('http://localhost:3000/LoginStudents',{
      correo_electronico: correo_electronico,
      password_:password_
    });
  }
  
  GenerarPassword(idCorreo:string){
  return this.http.put('http://localhost:3000/GenerateRamdonPassword/' + idCorreo,this.httpOptions).pipe(
    catchError(this.handleError)
  );
  }

  ObtenerPassword(idCorreo:string): Observable<Usuario[]>{
   
    return this.http.get<Usuario[]>('http://localhost:3000/ObtainPassword/'+idCorreo).pipe(
      catchError(this.handleError)
    );
  }

  CambiarPassword(idCorreo:string,password_:string){
    
    return this.http.post('http://localhost:3000/ChangePassword/'+idCorreo,{
      
      password_:password_
    });
  }


}
