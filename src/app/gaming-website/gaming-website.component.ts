import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaming-website',
  templateUrl: './gaming-website.component.html',
  styleUrls: ['./gaming-website.component.scss']
})
export class GamingWebsiteComponent implements OnInit {

  Games : Array<{
    Name : string ,
    imageurl : string ,
    Genre : "ACTION" | "FANTASY" | "SHOOTING" | "ADVENTURE" ,
    details : string
  }> = [
    {Name : "GTA V" , imageurl : ".././../assets/GTA5.jpeg" , Genre : "ACTION" , details : "Hello it's Gta"},
    {Name : "Call of Duty Black Ops" , imageurl : ".././../assets/COD.jpeg" , Genre : "SHOOTING" , details : "Hello it's COD"},
    {Name : "Assasins Creed Black Flag IV" , imageurl : ".././../assets/AC4.jpeg" , Genre : "FANTASY" , details : "Hello it's AC4"},
    {Name : "Tomb Raider" , imageurl : ".././../assets/TombRaider.jpeg" , Genre : "ADVENTURE" , details : "Hello it's Tomb Raider"},
    {Name : "Assasins Creed BrotherHood II" , imageurl : ".././../assets/AC2.jpeg" , Genre : "ACTION" , details : "Hello it's Gta"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
