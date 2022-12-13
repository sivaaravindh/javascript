let pi=3.14;
let r=5;
let A=pi*r*r;

console.log(A)
var sum = 0;
let i=parseInt (prompt("enter vealue"))
if((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
    sum = sum + i;
  }
  console.log(i)
//post-increment
let a=10;
    
    console.log (a++);
    console.log (a++);

//pre-increment
let b=20;
    console.log (++b);

//ternary operator
let c=(a>b)? "A is big": "A is small";
    console.log(c)

 //number
 let num=10;
       
 console.log("10 is " + typeof(num))
  //string
 let character="apple";
 
 console.log(typeof(character))
 //nan
 let add=num*character;
 console.log(add)
//undefind
 let un;
 console.log("un type is " + typeof(un))
 //null
 let no = null;
 console.log("Value of x=" + no);
  
//boolean
console.log(typeof(confirm())) 


  let value1=parseInt (prompt("enter the value 1"));
  let value2=parseInt (prompt("enter the value 1"));
 if (value1<value2) {
      console.log("true");
  }
   else {
       console.log("false");
      }
  //BigInt
  const x = (1n); 
  console.log(x)     
  console.log(typeof(x))
  
  let y=BigInt(1000000000000000000000000);
  console.log(y)
  console.log(typeof(y))