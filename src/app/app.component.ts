import { AfterViewInit, Component, Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Directive({selector : "[child-direct]"})
export class Children implements AfterViewInit{
  @Input() prasanna : string;

  constructor(private elee : ElementRef){
  }
  ngAfterViewInit(): void {
    console.log('ele' , this.elee);
    
    console.log('attribute value' , this.prasanna); 
   }

   getAl() {
    return "Hey it's working";
   }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Angular-Awesome';
  @ViewChild(Children,{static:false}) child : Children;
  constructor(private route : Router){
    
  }
  ngAfterViewInit(): void {
    this.route.events.pipe(
      filter(res => res instanceof RoutesRecognized),
      pairwise()
    ).subscribe((val:any) =>{
      console.log('value' , val[0].urlAfterRedirects);
      
    })
    }

   coming(value : string){
    }
}
