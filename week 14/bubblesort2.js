// function bubbleSort(arr){
//     const swap = (arr,idx1,idx2)=>{
//         [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
//     }

//     let i=arr.length;
//     let noswaps;
//     while(i>0){
//         let j=0;
//         noswaps=true;
//         while(j<i-1){
//             if(arr[j]>arr[j+1]){
//                 swap(arr,j,j+1);
//                 noswaps=false;
//             }
//             j++;
//         }
//         if(noswaps)break;
//         i--;
//     }
//     return arr;
// }


let result = bubbleSort([12,3,5,45,6,16]);
console.log(result);

function bubbleSort(arr){
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]]= [arr[idx2],arr[idx1]]
    }

   let i=arr.length;
   while(i>0){
    let noSwaps=true;
    let j=0;
    while(j<i-1){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1);
            noSwaps=false;
        }
        j++;
    }
    if(noSwaps)break;
    i--;
   }
   return arr;
}