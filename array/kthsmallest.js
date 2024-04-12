function findKthSmallest(arr, k) {
    let sorted = arr.sort((a, b) => a - b);
    return sorted[k - 1];
  }
  
  // Example usage
  let arr = [5, 3, 9, 2, 8];
  let result = findKthSmallest(arr, 3);
  console.log(result);