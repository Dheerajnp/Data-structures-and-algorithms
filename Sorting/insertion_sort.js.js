function insertionSort(arr){
  let i=1;
  while(i<arr.length){
    let currentVal = arr[i];
    let j=i-1;
    while(j>=0&&arr[j]>currentVal){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = currentVal;
    i++;
  }
}

let arr = [2,5,0,8,4,10,9];
insertionSort(arr);
console.log(arr)