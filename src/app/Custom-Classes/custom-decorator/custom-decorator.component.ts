import { AfterViewInit, Component, OnInit , EventEmitter } from '@angular/core';
import { ProvideInjection } from 'src/app/pjmodal/pjmodal.component';
 
type SelectedData = {
  name : string ,
  age : number ,
  address : string
}
 

@Component({
  selector: 'app-custom-decorator',
  template :`
  <div (click)="welcome()"> {{common.data}}</div>
  `,
  templateUrl: './custom-decorator.component.html',
  // providers :[ProvideInjection],
  styleUrls: ['./custom-decorator.component.scss'],
  inputs : ["data" , "commons"],
  outputs : ["Job"]
})
export class CustomDecoratorComponent implements OnInit , AfterViewInit{
  
  data : string ;
  commons : SelectedData;
  Job = new EventEmitter<string>();

  constructor(public common : ProvideInjection) { }



  ngAfterViewInit(): void {
    console.log("welcome");

    let data : string = "prasanna";
    data.substring(0,2);

   }

   ngOnInit() {
  }

  emit(){
    this.Job.emit("Hello I'm Goku . Super Saiyan !")
  }

  welcome(){

  }

}
