import { Inject, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, from, interval, of } from "rxjs";
import { delay  } from "rxjs/operators";


interface User{
  name : string,
  age : number,
  details : string
}

@Injectable({
  providedIn:'root'
})
export class UserService implements OnInit {


  constructor(){}

  ngOnInit(): void {

  }

  getUser() : Observable<User[]>{
      return of([
        {name:"Prasanna" , age:22, details:'Fitness Freak'},
        {name:"Jagadesh" , age:14, details:'lean Freak'},
        {name:"Sarath" , age:22, details:'Cricket Freak'},
        {name:"Pandi" , age:22, details:'Bike Freak'},
      ]).pipe(
       );
  }
}


