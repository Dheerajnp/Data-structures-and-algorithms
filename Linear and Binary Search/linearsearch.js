

function LinearSearchfindIdx(num,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === num){
            return i+1
        }
    }
    return -1
}


let arr=[90,34,23,1,12,123,231]
console.log(LinearSearchfindIdx(100,arr));
console.log(LinearSearchfindIdx(90,arr));