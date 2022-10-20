import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Requestedbook } from '../material/requestedbook.model';


const apiUrl = environment.requestUrl;
@Injectable({
  providedIn: 'root'
})
export class RequestbookService {

  private handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.log('Client Side Error', errorResponse.error);
    }
    else{
      console.log('Server Side Error',errorResponse.error)
    }
    return throwError('Their is a problem in your code');
  }

  constructor(private http: HttpClient) { }

  public addRequestedBook(data:any):Observable<Requestedbook[]>{
    return this.http.post<Requestedbook[]>(apiUrl,data);    
  }
  public getBooks():Observable<Requestedbook[]>{
    return this.http.get<Requestedbook[]>(apiUrl).pipe(catchError(this.handleError));
  }

}
