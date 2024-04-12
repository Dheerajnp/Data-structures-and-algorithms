// function selectionSort(arr,n=arr.length){
//     if(n===1) return arr;

//     let min = 0;
//     for(let i=1;i<n;i++){
//         if(arr[i]<arr[min]){
//             min=i;
//         }
//     }

//     if(min!==n-1){
//         [arr[min],arr[n-1]]=[arr[n-1],arr[min]];
//     }
//     selectionSort(arr,n-1);
//     return arr;
// }

// let result = selectionSort([12,3,5,45,6,16]);
// console.log(result);



function selectionSort(arr, n = arr.length) {
    if (n === 1) {
      return arr;
    }
  
    let minIndex = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
  
    if (minIndex !== n-1 ) {
      [arr[minIndex], arr[n - 1]] = [arr[n - 1], arr[minIndex]];
    }
  
    selectionSort(arr, n - 1);
  
    return arr;
  }
  let arr = [64, 25, 12, 22, 99];
let sortedArr = selectionSort(arr);
console.log(sortedArr);