import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';

interface timeZone {

    format(): string,
    setTimezone(timeZoneName : string , options?:Intl.DateTimeFormatOptions) : void,
    setOptions(value: Intl.DateTimeFormatOptions): void,
    reset(): void,
}

@Injectable({
    providedIn :'root'
})
export class CustomTimeZone implements timeZone{

    private date =  Intl.DateTimeFormat('en-US');
    private options !: Intl.DateTimeFormatOptions;
    protected AllTimeZone !: Array<string>;
    value: string = "Value is empty" ;

    constructor(){
     }
    
    
    setTimezone(timeZoneName: string , formatoptions : Intl.DateTimeFormatOptions = {}): void {
         this.AllTimeZone = this.getAllTimeZone();
         this.checkTimeZoneValid(timeZoneName,formatoptions);
         this.options = formatoptions;
         this.date = Intl.DateTimeFormat('en-US',this.options)
    }

    isValid(usertimeZone:string) : boolean{
        if(usertimeZone.length>0){
            const  AvailableTimeZones : Array<string> = this.getAllTimeZone();
            if(AvailableTimeZones!=null){
                const validTimezone =  AvailableTimeZones.find((timeZone : string) => usertimeZone.toLowerCase() === timeZone.split('/')[1].toLowerCase()); 
                if(validTimezone!=undefined){
                  return true;
                 }
                else{
                 return false;
                } 
              }
        }
        return null;
    }

    private checkTimeZoneValid(usertimeZoneName : string , formatoptions  : Intl.DateTimeFormatOptions = {}) : void{
        const  AvailableTimeZones : Array<string> = this.getAllTimeZone();
         
        if(AvailableTimeZones!=null){
          const validTimezone =  AvailableTimeZones.find((timeZone : string) => usertimeZoneName.toLowerCase() === timeZone.split('/')[1].toLowerCase()); 
          if(validTimezone!=undefined){
            console.log('valid' , validTimezone);
            formatoptions.timeZone = validTimezone;
          }
          else{
            throw Error('TimeZone Key was Invalid');
          } 
        }
    }

    getAllTimeZone(): Array<string> {
        this.AllTimeZone = (Intl as any).supportedValuesOf('timeZone');
        return this.AllTimeZone;
    }

    format(): string { 
        const convertDateTostring : string = this.date.format(Date.now()); 
        return convertDateTostring;
    }

    setOptions(options: Intl.DateTimeFormatOptions): void {
        this.options = options;
    }

    reset(): void {
        this.date = null;
        this.options = {};
    }

    toString() {
        return "hey this is Prasanna here";
    }

}


