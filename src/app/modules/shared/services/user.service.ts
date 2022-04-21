import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _baseUrl = environment.urlApi + '/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._baseUrl).pipe(tap((users: User[]) => {
      console.log(users);
    }));
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this._baseUrl + '/' + id);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete<number>(this._baseUrl + '/' + id);
  }
}
