import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._baseUrl);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this._baseUrl + '/' + id);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete<number>(this._baseUrl + '/' + id);
  }
}
