function quickSort(arr){

  if(arr.length<=1){
    return arr
  }

  let left = [];
  let right = [];
  let pivot = arr[arr.length-1];
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return [...quickSort(left),pivot,...quickSort(right)] 
}


  let arr = [6,2,1,9,7,4];
  console.log(quickSort(arr)); 