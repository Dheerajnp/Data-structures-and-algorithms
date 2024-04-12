

function sum(n){
    if(n<=1){
        return 1
    }
    return n+sum(n-1)
}


console.log("sum of N numbers using Recursion");


console.log(sum(4));