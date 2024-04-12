// function bubbleSort(arr, n = arr.length) {
//     if (n === 1) {
//       return arr;
//     }
  
//     let swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
  
//     if (!swapped) {
//       return arr;
//     }
  
//     return bubbleSort(arr, n - 1);
//   }
  



function bubbleSort(arr,n=arr.length){
    if(n===1){
        return arr;

    }
    let swap=false;
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swap=true;
        }
    }
    if(!swap)return arr;
    return bubbleSort(arr,n-1);
}

let result = bubbleSort([12,3,5,45,6,16]);
console.log(result);