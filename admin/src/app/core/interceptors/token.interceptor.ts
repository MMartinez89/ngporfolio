import { AuthService } from './../auth/auth.service';
import { Injectable, Injector, Type } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SessionStorageService } from '@core/service/session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private router: Router,
    private ssService: SessionStorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.router.url.endsWith('login') || this.router.url.endsWith('renewtoken')) {
      return next.handle(request);
    }
    const auth = this.injector.get<AuthService>(AuthService as Type<AuthService>);
    const token = auth.user && auth.token ? auth.token : '';
    request = request.clone({
      setHeaders: {
        // 'Api-Token': token,
        // TODO: Replace following line with an actual Base64 | JWT-based token
        'Authorization': `Bearer ${token}`,
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    return next.handle(request);
  }
}