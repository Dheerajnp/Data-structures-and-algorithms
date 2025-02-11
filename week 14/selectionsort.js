// function selectionSort(arr){
// const swap=(arr,idx1,idx2)=>{
//     [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
// }

//     for(let i=0;i<arr.length;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j;
//             }
//         }
//         if(i!==min){
//             swap(arr,i,min)
//         }
//     }


//     return arr;
// }




function selectionSort(arr){
    const swap=(arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
    }

    let i=0;
    while(i<arr.length){
        let min = i;
        let j=i+1;
        while(j<arr.length){
            if(arr[j]<arr[min]){
                min=j;
            }
            j++;
        }
        if(i!==min){
            swap(arr,i,min);
        }
        i++;

    }
    return arr;
}

let result = selectionSort(['apple', 'banana', 'orange', 'kiwi', 'grape']);
console.log(result);