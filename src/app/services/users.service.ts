import { Injectable } from '@angular/core';

import { catchError, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user/user';
import { environment } from 'src/environments/environment';
import { User_Create } from '../model/user/user-create';

@Injectable({ providedIn: 'root' })
export class UsersService {
  readonly endpoint = 'https://localhost:7281';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User_Create[]> {
    return this.http.get<User_Create[]>(this.endpoint + '/api/User');
  }
  getUser(id: string): Observable<User_Create[]> {
    return this.http.get<any>(this.endpoint + `/api/User/${id}`);
  }
  createUser(user: User_Create): Observable<User_Create> {
    return this.http.post<User_Create>(this.endpoint+ '/api/User/create-user', user);
  }

  updateUser(
    id: number,
    firstName: string,
    lastName: string
  ): Observable<User> {
    return this.http.put<User>(this.endpoint + `/api/User/edit/${id}`, {
      Id: id,
      newFName: firstName,
      newLName: lastName,
    });
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.endpoint + `/api/User/${id}`);
  }
}
