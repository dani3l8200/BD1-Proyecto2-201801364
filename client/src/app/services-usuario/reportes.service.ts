import { Report1 } from './../modals-usuario/report1';
import { ConsultaLikes } from './../modals-usuario/consultaLikes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

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
  reporte1(semestre:string): Observable<Report1[]>{
    return this.http.get<Report1[]>('http://localhost:3000/Consultasignacion/'+semestre).pipe(
      catchError(this.handleError)
    );

  }
  reporte2(codigo_curso:number,semestre:string,year_:number,codigo_seccion:number,horaInicio:string,horaFin:string){
    return this.http.post('http://localhost:3000/ConsultaAprobados',{
      codigo_curso: codigo_curso,
      semestre: semestre,
      year_:year_,
      codigo_seccion:codigo_seccion,
      horaInicio:horaInicio,
      horaFin:horaFin
    });
  }

  reporte4(creador:number,admin:number): Observable<ConsultaLikes[]>{
    return this.http.get<ConsultaLikes[]>('http://localhost:3000/consultaLikes/'+creador+'/'+admin).pipe(
      catchError(this.handleError)
    );
  }
  reporte41(creador:string,admin:string): Observable<ConsultaLikes[]>{
    return this.http.get<ConsultaLikes[]>('http://localhost:3000/consultaLikes/'+creador+'/'+admin).pipe(
      catchError(this.handleError)
    );
  }
  reporte5(codigo_curso:number,semestre:string,year_:number,codigo_seccion:number,horaInicio:string,horaFin:string){
    return this.http.post('http://localhost:3000/consultaAsistencia',{
      codigo_curso: codigo_curso,
      semestre: semestre,
      year_:year_,
      codigo_seccion:codigo_seccion,
      horaInicio:horaInicio,
      horaFin:horaFin
    });
  }

}
