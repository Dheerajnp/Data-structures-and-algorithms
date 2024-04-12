function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  // Example usage
  let arr = [10, 20, 30, 40, 50];
  let result = reverseArray(arr);
  console.log(result)
  