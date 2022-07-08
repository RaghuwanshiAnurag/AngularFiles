import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookList } from '../book-list/book-list';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http:HttpClient){}
    
  url:string = "http:/localhost:3000/BookList";
   public getUsers():Observable<BookList[]>{
    return this.http.get<BookList[]>(this.url);
   }
}
