// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j].length > arr[j+1].length){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      
      if(noSwaps) break;
    }
    
    return arr;
  }
  
  console.log(bubbleSort(['tree','abc','str','cdefg']));