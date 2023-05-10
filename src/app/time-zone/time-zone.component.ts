import { Component, OnInit } from '@angular/core';
import { CustomTimeZone } from '../Services/timeZone';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit {

  currentTime : string;
  constructor(private timeZone : CustomTimeZone) { }

  ngOnInit() { 
    const d = new CustomTimeZone();
    console.log(d)
  }

  search(val : string){
    console.log(val);
    
   if(this.timeZone.isValid(val)){
    this.timeZone.setTimezone(val,{ weekday:'long', hour:'numeric' , minute:'numeric',second:'numeric'});
    this.currentTime = this.timeZone.format();
   }
  }

}
