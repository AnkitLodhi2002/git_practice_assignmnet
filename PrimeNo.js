//Prime Problem
let num = 5;
var sum = 0;
    for(let i=1; i<=num; i++){
        if(num%i==0)
        sum++;
    }
    if(sum==2){
        console.log("Yes")
    }else{
        console.log("No")
    }