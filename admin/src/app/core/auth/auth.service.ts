import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { HttpService } from '@core/service/http.service';
/*import { HttpService } from 'src/app/core/service/http.service';*/
import { User } from 'src/app/shared/models/user.model';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';
import {SessionStorageService} from '../service/session-storage.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  token: string;
  user: User;
  constructor(
    private httpService: HttpService,
    private lsService: LocalStorageService,
    private ssService: SessionStorageService,
    private router: Router) {
     // this.url = urljoin(environment.apiUrl, '/api/auth');
     this.url = urljoin(environment.apiUrl, '/auth');
     this.loadStorage();
    }
  //login(user: Partial<User>, remember: boolean = false) {
   // if (remember) {
   //   this.lsService.set('email', user.email);
   // } else {
   //   this.lsService.remove('email');
    //}

    //return this.httpService.post(this.url, user);

  //}

  login(user: Partial<User>, remember: boolean = false) {
    if (remember) {
      this.lsService.set('email', user.email);
    } else {
      this.lsService.remove('email');
    }

    return this.httpService.post(this.url, user).pipe(
      map((response) => {
        this.saveStorage(
          response.id,
          response.token,
          response.user
        );
      })
    ).pipe(
      catchError(err => throwError(err))
    );

  }
  registerUser(user) {
    // return new Promise((resolve, reject) => {
    //   this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    //     .then((userData: any) => {
    //       const userCollection = this.afs.collection('users');
    //       userCollection.doc(userData.user.uid).set({
    //         firstname: user.firstname,
    //         lastname: user.lastname,
    //         email: user.email,
    //       });
    //       resolve(user);
    //     }).catch(err => reject(err));
    // });
  }
  logout() {
    this.user = null;
    this.token = null;
    // this.menu = [];
    this.ssService.remove('token');
    this.ssService.remove('user');
    this.router.navigate(['/login'])
  }
  // isAuth() {
  //   return this.afAuth.authState
  //     .pipe(
  //       map(fbUser => fbUser != null)
  //     );
  // }

  isAuth() {
  }
  saveStorage(id: number, token: string, user: User) {
    this.ssService.set('id', id);
    this.ssService.set('token', token);
    this.ssService.set('user', user);
    this.user = user;
    this.token = token;
  }

  loadStorage() {
    const token = this.ssService.get('token');
    if (token) {
      this.token = token;
      this.user = this.ssService.get('user');
    } else {
      this.token = '';
      this.user = null;
    }
  }
}
