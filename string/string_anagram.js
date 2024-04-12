function anagrams(str1, str2) {
    let sort1 = str1.toLowerCase().split("").sort().join("");
    let sort2 = str2.toLowerCase().split("").sort().join("");
  
    return sort1 === sort2;
  }
  
  let result = anagrams("listen", "silent");
  console.log(result);
  
