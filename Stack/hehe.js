function* range(n){
    for(let i= 0;i<n;i++){
        yield i 
    }
}


let gen = [...range(5)];
console.log(gen);