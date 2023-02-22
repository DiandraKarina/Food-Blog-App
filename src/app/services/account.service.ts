import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User_Create } from 'src/app/model/user/user-create';
import { User_Login } from 'src/app/model/user/user-login';
import { User } from 'src/app/model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject$: BehaviorSubject<User>

  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('blogLab-currentUser')));
  }

  login(model: User_Login) : Observable<User>  {
    return this.http.post(`${environment.urlAddress}/Account/login`, model).pipe(
      map((user : User) => {

        if (user) {
          localStorage.setItem('blogLab-currentUser', JSON.stringify(user));
          this.setCurrentUser(user);
        }

        return user;
      })
    )
  }

  register(model: User_Create) : Observable<User> {
    return this.http.post(`${environment.urlAddress}/Account/register`, model).pipe(
      map((user : User) => {

        if (user) {
          localStorage.setItem('blogLab-currentUser', JSON.stringify(user));
          this.setCurrentUser(user);
        }

        return user;
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSubject$.next(user);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject$.value;
  }

  public givenUserIsLoggedIn(firstName: string) {
    return this.isLoggedIn() && this.currentUserValue.firstName === firstName;
  }

  public isLoggedIn() {
    const currentUser = this.currentUserValue;
    const isLoggedIn = !!currentUser && !!currentUser.token;
    return isLoggedIn;
  }

  logout() {
    localStorage.removeItem('blogLab-currentUser');
    this.currentUserSubject$.next(null);
  }
}