let num = 1250;
let flag = 1;
for(let i= 2; i*i<= num; i++){
    if(num%i == 0){
        flag=0;
        break;
    }
}
    if(flag ==1){
        console.log("prime");

    }
    else
     console.log("not prime");

