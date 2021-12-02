import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  userInfo =[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@4mg.com",
      "password": "gshsA34@j5j",
      "token": generateString(5)
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@yaho.com",
      "password": "gsgsA34@jh5",
      "token": generateString(5)

    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "password": "asgsA34@jh4",
      "token": generateString(5)
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "password": "asasA34@jh6",
      "token": generateString(5)
    }]
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      let item = this.userInfo.find(x => x.email== username && x.password== password)

      if(item) {
        localStorage.setItem('currentUser', JSON.stringify(item));
        this.currentUserSubject.next(item);
        return item
      } else
      return null
        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    // program to generate random strings

}


// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
