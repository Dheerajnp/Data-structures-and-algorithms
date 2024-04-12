//ascending


// function bubbleSort(arr){
//     const swap = (arr,idx1,idx2)=>{
//         [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
//     }

//     let noSwaps;
//     for(let i=arr.length;i>0;i--){
//         noSwaps=true;
//         for(let j=0;j<i-1;j++){
//             if (arr[j]>arr[j+1]) {
//                 swap(arr,j,j+1);
//                 noSwaps=false
//             }
//         }
//         if(noSwaps)break;
//     }
//     return arr;
// }


// let result = bubbleSort([12,3,5,45,6,16]);
// console.log(result);




//Descending



function bubbleSort(arr){
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
    }

    let noSwaps;
    for(let i=arr.length;i>0;i--){
        noSwaps=true;
        for(let j=0;j<i-1;j++){
            if (arr[j]<arr[j+1]) {
                swap(arr,j,j+1);
                noSwaps=false
            }
        }
        if(noSwaps)break;
    }
    return arr;
}


let result = bubbleSort([12,3,5,45,6,16]);
console.log(result);