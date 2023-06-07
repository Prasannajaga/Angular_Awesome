import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "FormErrorController"
  })
  export class FormErrorController implements PipeTransform {
  
    transform(value: any , key : string ) { 
      return this.getErrorMessage(value , key); 
     }
  
    getErrorMessage(value : string , fields : string = "No Fields") : string {
      let error : string  = " ";
      switch(value){
        case "INVALID" :
            error = fields + " is Required"
        break; 
       }
      return error;
    }
  
  }


  @Pipe({
    name : "Filters"
  })
  export class filterByName implements PipeTransform{

      transform(value: Array<any>, searchTxt : string = "") {
        let data : Array<any> = [];
        if(value.length>0){
            value.forEach((ele:{name : string , age : number})=>{
                if(ele.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())){
                    data.push(ele)
                }
            })
         }
        return data;
      }

  }