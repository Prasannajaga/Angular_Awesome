const arr : Array<any> =[
    {name :"Prasanna" , age:22},
    {name :"Reshma" , age:22},
    {name :"Dhinesh" , age:29},
    {name :"Thiru" , age:29},
    {name :"Pradeep" , age:32},
    {name :"Mugilan" , age:32},
    {name :"Lokesh" , age:32},
    {name :"Thanush" , age:24},
];

// ForEach can update the original Array , return nothing

// const newarr =  arr.forEach(ele=>{
//     if(ele.age == 22){
//         ele.name = "Prasanna jaga";
//     }
//     return ele;
// });

// map can update the original Array and we can return the array if we want


//  const newarr =  arr.map(ele=>{
//     if(ele.age == 22){
//         ele.name = "Prasanna Jagadesh";
//     }
//     return  ele;
// });


// reduce 
// with this we can return the modified data and update the original array as well 
// 1st parameter is : your modfied new Array
// 2nd parameter is : your Element value ofArray 

// const newarr = arr.reduce((val,curr)=>{
//     if(curr.age===22){
//         curr.name ="Itachi uchiha";
//      }
//     val.push(curr)
//     return val;
// },[])
 

// filter can return the value but not modifiy the original array
// 1st parameter is : element of the array
// 2nd parameter is : index of the current element

// const newarr = arr.filter(val => val.age < 30);
// console.log(newarr);


// find can return the value and modify the original array
// 1st parameter is : element of the array
// 2nd parameter is : index of the current element

// const d = arr.find(val => val.age === 22);
// d.name = "Itachi";
// console.log(arr);

// let  d= arr.copyWithin(1,2);

// Slice only used to remove the element
// remove the value based the on the start and end index given in the Parameters
// 1st params is : start where you want to remove 
// 2nd params is : end where you need end the removing element
// it only returns the removed element value and not modifiy the original Array

// let d = arr.slice(1 , 4);
// console.log(arr);


// Splice only used to remove the element . it returns the removed element
// 1st params is : start index of the element where you want to remove
// 2nd params is : how many elements you want to delete from the start index
// 3rd params is optional : insert the element at your start index of the element
// it can modifiy the original Array

// let d = arr.splice(1 , 4 );
// console.log(d);

// shift remove the first element of the array and return the element
// let d = arr.shift();

// unshift can add the element at first index and return the new array of length 
// let d = arr.unshift();
 
let d = arr.findIndex(val => val.name == 'Prasanna');
console

 
  

