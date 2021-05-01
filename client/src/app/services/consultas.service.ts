import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError, Observable, observable, from } from "rxjs";
import { catchError } from "rxjs/operators";
import {consulta1,consulta10,consulta11,consulta12,consulta13,consulta14,consulta15,
  consulta16,consulta17,consulta18,consulta19,consulta2,consulta20,consulta3,consulta4, 
  consulta5, consulta6, consulta7, consulta8, consulta9,
} from "../models/consultas";
@Injectable({
  providedIn: "root",
})
export class ConsultasService {
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("Un error ha ocurrido:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: `,
        error.error
      );
    }
    return throwError("Algo malo sucedio, por favor intentarlo más tarde D:");
  }

  consulta1(): Observable<consulta1[]> {
    return this.http
      .get<consulta1[]>("http://34.74.1.140:3000/consulta1/")
      .pipe(catchError(this.handleError));
  }

  consulta2(): Observable<consulta2[]> {
    return this.http
      .get<consulta2[]>("http://34.74.1.140:3000/consulta2/")
      .pipe(catchError(this.handleError));
  }

  consulta3(): Observable<consulta3[]> {
    return this.http
      .get<consulta3[]>("http://34.74.1.140:3000/consulta3/")
      .pipe(catchError(this.handleError));
  }

  consulta4(): Observable<consulta4[]> {
    return this.http
      .get<consulta4[]>("http://34.74.1.140:3000/consulta4/")
      .pipe(catchError(this.handleError));
  }
  consulta5(): Observable<consulta5[]> {
    return this.http
      .get<consulta5[]>("http://34.74.1.140:3000/consulta5/")
      .pipe(catchError(this.handleError));
  }

  consulta6(): Observable<consulta6[]> {
    return this.http
      .get<consulta6[]>("http://34.74.1.140:3000/consulta6/")
      .pipe(catchError(this.handleError));
  }

  consulta7(): Observable<consulta7[]> {
    return this.http
      .get<consulta7[]>("http://34.74.1.140:3000/consulta7/")
      .pipe(catchError(this.handleError));
  }

  consulta8(): Observable<consulta8[]> {
    return this.http
      .get<consulta8[]>("http://34.74.1.140:3000/consulta8/")
      .pipe(catchError(this.handleError));
  }

  consulta9(): Observable<consulta9[]> {
    return this.http
      .get<consulta9[]>("http://34.74.1.140:3000/consulta9/")
      .pipe(catchError(this.handleError));
  }
  consulta10(): Observable<consulta10[]> {
    return this.http
      .get<consulta10[]>("http://34.74.1.140:3000/consulta10/")
      .pipe(catchError(this.handleError));
  }

  consulta11(): Observable<consulta11[]> {
    return this.http
      .get<consulta11[]>("http://34.74.1.140:3000/consulta11/")
      .pipe(catchError(this.handleError));
  }
  consulta12(): Observable<consulta12[]> {
    return this.http
      .get<consulta12[]>("http://34.74.1.140:3000/consulta12/")
      .pipe(catchError(this.handleError));
  }

  consulta13(): Observable<consulta13[]> {
    return this.http
      .get<consulta13[]>("http://34.74.1.140:3000/consulta13/")
      .pipe(catchError(this.handleError));
  }
  consulta14(): Observable<consulta14[]> {
    return this.http
      .get<consulta14[]>("http://34.74.1.140:3000/consulta14/")
      .pipe(catchError(this.handleError));
  }
  consulta15(): Observable<consulta15[]> {
    return this.http
      .get<consulta15[]>("http://34.74.1.140:3000/consulta15/")
      .pipe(catchError(this.handleError));
  }
  consulta16(): Observable<consulta16[]> {
    return this.http
      .get<consulta16[]>("http://34.74.1.140:3000/consulta16/")
      .pipe(catchError(this.handleError));
  }
  consulta17(): Observable<consulta17[]> {
    return this.http
      .get<consulta17[]>("http://34.74.1.140:3000/consulta17/")
      .pipe(catchError(this.handleError));
  }
  consulta18(): Observable<consulta18[]> {
    return this.http
      .get<consulta18[]>("http://34.74.1.140:3000/consulta18/")
      .pipe(catchError(this.handleError));
  }
  consulta19(): Observable<consulta19[]> {
    return this.http
      .get<consulta19[]>("http://34.74.1.140:3000/consulta19/")
      .pipe(catchError(this.handleError));
  }
  consulta20(): Observable<consulta20[]> {
    return this.http
      .get<consulta20[]>("http://34.74.1.140:3000/consulta20/")
      .pipe(catchError(this.handleError));
  }
}
