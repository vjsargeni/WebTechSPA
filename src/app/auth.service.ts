import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(firstname: string, lastname: string, email: string, password: string ) {
    return this.http.post('http://localhost:3000/api/auth/register', {
        firstname,
        lastname,
        email,
        password
      })
      .pipe(
        tap(res => { this.setSession(res); }),
        shareReplay()
      );
  }

  login(email: string, password: string ) {
    return this.http.post('http://localhost:3000/api/auth/login', {
        email,
        password
      })
      .pipe(
        tap(res => { this.setSession(res); }),
        shareReplay()
      );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
