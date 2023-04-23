import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { UserService } from '../Services/UserService';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';


interface User{
  name : string,
  age : number,
  details : string
}

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.scss']
})
export class ReactiveProgrammingComponent implements OnInit {

  constructor(private userService : UserService) { }

    user$ = new BehaviorSubject<any>([]);

    existUsers : User[] = [
      {name:"Prasanna" , age:22, details:'Fitness Freak'},
      {name:"Jagadesh" , age:14, details:'lean Freak'},
      {name:"Sarath" , age:22, details:'Cricket Freak'},
    ]

  ngOnInit() {
    const data =  this.userService.getUser();
    this.user$.next(     [ {name:"Prasanna" , age:22, details:'Fitness Freak'}],     );
    this.user$.next(      [{name:"Prasanna Kumar" , age:212, details:'Fitness Freak'}, ]    );
    this.user$.next(     [ {name:"Prasanna raju" , age:220, details:'Fitness Freak'},  ]   );

  }

  setval(val){
    val = [val];

    this.user$.next(val);
    // this.user$.
    this.user$.subscribe(res=>{
      console.log(res);

    })
   }

   async getsome(eve){
      console.log(eve);

    }
}
