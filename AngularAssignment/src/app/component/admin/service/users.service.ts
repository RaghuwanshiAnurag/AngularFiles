import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  requestBook(data:any){
    return this.http.post<any>("http://localhost:3000/requestlist",data)
  }
}
