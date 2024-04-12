function countSubstring(str,substr){
    let count = 0;
    let index = str.indexOf(substr);
    while(index!==-1){
        count++;
        index = str.indexOf(substr,index+1)
    }
    return count;
}

let sentence = "boothebootheboo";
let substring = "the";
let result = countSubstring(sentence.toLowerCase(), substring.toLowerCase());
console.log(result)