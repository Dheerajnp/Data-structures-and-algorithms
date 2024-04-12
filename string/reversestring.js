function reverseWords(str) {
    let words = str.split(" ");
    let reversed = words.map((word) => word.split("").reverse().join(""));
    return reversed.join(" ");
  }
  
  // Example usage
  let str = "Hello I am me";
  let result = reverseWords(str);
  console.log(result); 
  