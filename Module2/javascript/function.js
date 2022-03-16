function sayhello(){
    console.log("hello everyone");

}

sayhello();

// function with parameters
function add(num1, num2){
    let sum = num1+num2;
    console.log(sum);

}

add(5,3);

function multiply(n1, n2){
    return n1*n2;
}
 let ans = multiply(3,5);
 console.log(ans);

 // function store in a variable 
 let a = function add(n3,n4){
     return n3+n4;
 }
 console.log(a(15,25));

 function div(num1,num2){
     let ans = num1/num2;
     console.log(ans);
 }
 div(15,5);

 //IIFE IMMEDIATE INVOKED FUNCTION EXPRESSION
 (function(num1,num2){
     console.log(num1%num2);

 })(30,15);