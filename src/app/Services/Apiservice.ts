import { HttpClient, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn : 'root',
})
export class Apiservice {

   constructor(private Http : HttpClient){}


  getGoogleBooks(value : string) : Observable<HttpResponse<any>>{
    return this.Http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${value}`,{
      observe  :'response'
    });
  }

}
