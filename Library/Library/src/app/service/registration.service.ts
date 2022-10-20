import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url="http://localhost:3000/registration"

  constructor(private http:HttpClient) { }

  registerUser(data: any)
  {
       return this.http.post(this.url+"registration",data)
  }
}
