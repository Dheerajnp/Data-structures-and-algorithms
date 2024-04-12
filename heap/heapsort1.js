function heapify(arr,n,i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left<n&&arr[left]>arr[largest]){
        largest=left;
    }

    if(right<n&&arr[right]>arr[largest]){
        largest=right;
    }

    if(i!==largest){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        heapify(arr,n,largest)
    }
}


function heapSort(arr){
    let n = arr.length;

    for(let i= Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0)
    }
}

let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log(arr);
