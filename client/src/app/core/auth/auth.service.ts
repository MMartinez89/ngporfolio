import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../service/http.service';
import { User } from '../../shared/models/user.model';
import { LocalStorageService } from '../service/local-storage.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  constructor(
    private httpService: HttpService,
    private lsService: LocalStorageService,
    private router: Router) {
      this.url = urljoin(environment.apiUrl, '/api/auth');
    }
  login(user: Partial<User>, remember: boolean = false) {
    if (remember) {
      this.lsService.set('email', user.email);
    } else {
      this.lsService.remove('email');
    }

    return this.httpService.post(this.url, user);

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
    // debugger
    // return this.afAuth.auth.signOut();
  }
  // isAuth() {
  //   return this.afAuth.authState
  //     .pipe(
  //       map(fbUser => fbUser != null)
  //     );
  // }

  isAuth() {
  }

}
