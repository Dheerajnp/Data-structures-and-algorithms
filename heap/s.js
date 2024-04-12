


function heapify(arr,n,i){
    let largest = i;
    let left = i*2+1;
    let right = i*2+2;
    if(left<n&&arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }

    if(i!==largest){
        [arr[largest],arr[i]]=[arr[i],arr[largest]];
        heapify(arr,n,largest);
    }   
}

function heapSort(arr){
    let n = arr.length;

    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0)
    }
}

let my_list = [12, 11, 13, 5, 6, 7];
heapSort(my_list);
console.log(my_list);
