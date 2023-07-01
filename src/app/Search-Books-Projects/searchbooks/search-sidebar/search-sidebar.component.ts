import { Component, OnInit } from '@angular/core';
import { buttonConfig } from 'src/app/Services/buttonConfig';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss'],
  inputs: ['ModalData' , 'buttonConfig']
})
export class SearchSidebarComponent implements OnInit {

  ModalData : Function;
  buttonConfig : buttonConfig[] = [];
  Name : string = "Prasanna";

  constructor() { }



  ngOnInit() {
    console.log(this.buttonConfig);

  }

 public  getMyName() : string {
    return "Hey my Name is Prasanna";
  }

  callThis(val){
    alert("from child" + val)
    this.ModalData(this)
  }

  onClick(data : buttonConfig){
    console.log(data.source);

    data.clickHandler.call(this,this.Name , "hey it's me Goku ")

  }
}
