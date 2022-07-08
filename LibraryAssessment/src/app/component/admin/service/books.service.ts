import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  deleteBook(id: number) {
    return this.http.delete<any>("http://localhost:3000/books/"+id)
  }

  constructor(private http:HttpClient) { }

  postBook(data:any){
    return this.http.post<any>("http://localhost:3000/books/",data)
  }

  getBook(){
    return this.http.get<any>("http://localhost:3000/books/")
  }

  putBookData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/books/"+id,data);
  }

  getRequest(){
    return this.http.get<any>("http://localhost:3000/requestlist")
  }
}
