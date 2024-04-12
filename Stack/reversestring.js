function reverse(str){
    let stack =[];
    for(let i=0;i<str.length;i++){
        stack.push(str[i]);
    }
    let reverse =''
  while(stack.length>0){
    reverse+=stack.pop()
  }
    return reverse
}
console.log(reverse("Reversal of string"));