import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pjmodal',
  templateUrl: './pjmodal.component.html',
  styleUrls: ['./pjmodal.component.scss']
})
export class PJModalComponent implements OnInit {

  @Input() data : string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams);
    console.log(this.route.fragment); 
  }

  close(modal : HTMLDivElement){
    modal.style.display = "none";
      console.log(modal);
      
   }

}
