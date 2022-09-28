import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:5011';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    responseType: 'text' as 'json'
  };

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users', this.httpOptions);
  }

  public loginUser(user: User): void {
    this.http.post<User>(this.url + '/login', user, this.httpOptions).subscribe({
      next: (response) => console.log(response),
      error: () => console.log('something went wrong')
    });
  }

  public signupUser(userPostData: User): void {
    this.http.post<User>(this.url + '/signup', userPostData, this.httpOptions).subscribe((response: any) => {
      console.log(response);
    });
  }

}