import { Component, OnInit , ContentChild , TemplateRef, ViewContainerRef } from '@angular/core';
import { ProvideInjection } from 'src/app/pjmodal/pjmodal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles : [
    `
    table{
      border : 1px solid;
      padding:10px;
    }
    
     table > thead > tr > td {
      padding:20px
    }
    `
  ]
 })
export class TableComponent implements OnInit {


  @ContentChild("headers" ,{static : true}) headers : TemplateRef<any>;
  @ContentChild("rows" ,{static : true}) rows : TemplateRef<any>;

  collectionsPerson : Array<{name:string , age : number}>=  [
    {name : "Prasanna" , age :22},
    {name : "Reshma Banu" , age :24},
    {name : "Nihaya" , age :21},
    {name : "Jagadesh" , age :15},
    {name : "Lokesh" , age :32},
  ]

  constructor(public common : ProvideInjection) { }

  ngOnInit() {
  }

}
