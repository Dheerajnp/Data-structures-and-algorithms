function removeDuplicates(arr){
    let unique = [];
    for(let i=0;i<arr.length;i++){
        if(unique.indexOf(arr[i])===-1){
            unique.push(arr[i])
        }
    }
    return unique;
}

let arr = [1, 2, 3, 2, 4, 5, 5, 6];
let result = removeDuplicates(arr);
console.log(result);