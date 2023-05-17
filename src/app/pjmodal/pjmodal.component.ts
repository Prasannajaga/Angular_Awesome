import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pjmodal',
  templateUrl: './pjmodal.component.html',
  styleUrls: ['./pjmodal.component.scss']
})
export class PJModalComponent implements OnInit {

  @Input() data : string;
  constructor() { }

  ngOnInit() {
  }

  close(){
    alert();
  }

}
