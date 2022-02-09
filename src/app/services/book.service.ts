import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient, private _auth: AuthService) { }

  saveBook(books: any[]): Observable<any> {
    const tk = this._auth.getToken();
    console.log('Current Token:', tk);
    // return this._http.post("https://demomamey-default-rtdb.firebaseio.com/data.json", books);
    return this._http.post("https://bookauth-846f9-default-rtdb.firebaseio.com/data.json?auth=" + tk, books);
  }

  getBook(): Observable<any>{
    const tk = this._auth.getToken();
    console.log('Current Token:', tk);
    // return this._http.get("https://demomamey-default-rtdb.firebaseio.com/data.json");
    return this._http.get("https://bookauth-846f9-default-rtdb.firebaseio.com/data.json?auth=" + tk);
  }
}

