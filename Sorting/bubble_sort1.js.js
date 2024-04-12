function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                swapped = true;
            }
        }
    }while(swapped)
}

let arr = [6,2,1,9,7,4]
bubbleSort(arr)

console.log(arr)