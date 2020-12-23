import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // tslint:disable-next-line: variable-name
  private _url: string;
  
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }
  constructor(protected http: HttpClient) { }
  get<T>(url): Observable<any> {
    return this.http.get(url);
  }
  getSingle<T>(url, id: any) {
    return this.http.get<T>(
      `${url}/${id}`
    ).pipe(
      catchError(err => observableThrowError(err))
    );
  }
  post<T>(url, payload): Observable<any> {
    return this.http.post(url, payload).pipe(
      catchError(err => observableThrowError(err))
    );
  }

  put<T>(url, payload: T): Observable<T> {
    return this.http.put<T>(url, payload).pipe(
      catchError(err =>  observableThrowError(err))
    );
  }
  delete(url): Observable<any> {
    return this.http.delete(url).pipe(
      catchError(err => observableThrowError(err))
    );
  }
}