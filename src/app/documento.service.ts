import { Injectable } from '@angular/core';
import { Documento } from './models/documento';
import * as constants from './class/AppConst';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(
    private http: HttpClient
  ) { }

  getDocumentos (): Observable<Documento[]>{
    return this.http.get<Documento[]>(constants.ListDocumentos)
      .pipe(
        tap(documentos => {
          this.log("Documentos listados");
        }),
        catchError(this.handleError('getDocumentos', []))
      );
  }

  // addResultado (resultado: Resultado): Observable<Resultado> {
  //   return this.http.post<Resultado>(this.resultadoUrl, resultado, httpOptions).pipe(
  //     tap((resultado: Resultado) => this.log(`Resultado agregado w/ id=${resultado.id}`)),
  //     catchError(this.handleError<Resultado>('addResultado'))
  //   );
  // }

  private handleError<T> (operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      console.error(`${operation} fallido: ${error}`);
      console.log(error);
      return of(result as T);
    };
  }

  private log(message: string)
  {
    console.log(`Respuesta del servidor: ${message}`);
  }
}
