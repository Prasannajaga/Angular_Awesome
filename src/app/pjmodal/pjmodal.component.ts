import { Component, Injectable, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'prasa'
})
export class extractPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    console.log(value);
  }

}


export class ProvideInjection {
  data: Array<string> = [
    "Hey it's me Goku", "Hokage Dattebayo", "I'm the Prince of the Saiyan"
  ]

  getData() : Array<string>{
    return this.data;
  }
}


@Component({
  selector: 'prasa-pjmodal',
  templateUrl: './pjmodal.component.html',
  styleUrls: ['./pjmodal.component.scss'],
  // providers:[ProvideInjection]
})
export class PJModalComponent implements OnInit {

  @Input() data: string;
  @Input("datas") collection: Array<string>;
  @Output() sendData = new EventEmitter();

  constructor(public common: ProvideInjection) { } 

  ngOnInit() {

  }

  static updateControl(data:{value : string , form : FormGroup}){
    data.form.get(data.value).clearValidators();
    data.form.get(data.value).updateValueAndValidity();
  }

  close(modal: HTMLDivElement) {
    modal.style.display = "none";
    console.log(modal);
  }

  removeItem(value: string, index: number) {
    this.common.data!.forEach((ele: string, i: number) => {
      if (ele.includes(value) && i === index) {
        this.common.data.splice(i, 1);
      }
    })
  }

  change(data: any) {
    console.log(data);

    this.sendData.emit("Hello it's me ")
  }

}
