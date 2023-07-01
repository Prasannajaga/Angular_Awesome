

export class buttonConfig{

  buttonName : string;
  clickHandler : Function;
  source : any;

  constructor(buttonName : string , clickHandler : Function , source : any){
      this.buttonName = buttonName;
      this.clickHandler = clickHandler;
      this.source = source;
  }


}
