console.log("hello peter")
console.log("34"+4);

const a=1,b=6;
if(a<b){
    console.log("a is amall");
}
hell= (a,b)=>{
    console.log(a+b);
}
console.log(hell(a,b))
const arr=[11,34,"b","sdf"];

for(let x in arr){console.log(arr[x])}
////errorhandling

//try{
//  throw new error("a is const");
//}catch(err){
//    console.log(err);
  //  }
    
    //specisl features of var//whuy its less commpnly used
    
   // variable defined by let inside an function /or codeblock cannot be used outside..but var can
  
  
    ////function
    function square(x){
        return (x * x);
    }
    
    console.log(square(10));
    
    //Arrow
    
    const cowsay = require("cowsay");

console.log(
    cowsay.say({
    text : "I'm badn",
    e : "oO",
    T : "U "
}));