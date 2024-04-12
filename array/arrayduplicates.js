// function findDuplicates(arr){
// let duplicates = [];
// for(let i=0;i<arr.length;i++){
//     if(duplicates.indexOf(arr[i])===-1&&arr.indexOf(arr[i],i+1)!==-1){
//         duplicates.push(arr[i]);
//     }
// }
// return duplicates
// }

// let arr = [1, 2, 3, 2, 4, 5, 5, 6];
// let result = findDuplicates(arr);
// console.log(result);


// function removeDuplicates(arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr.indexOf(arr[i],i+1)==-1){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// let arr = [1, 2, 3, 2, 4, 5, 5, 6];
// let result = removeDuplicates(arr);
// console.log(result);


function unique(arr){
    let uniqueArr = [];
    for(let i = 0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}


let arr = [1, 2, 3, 2, 4, 5, 5, 6];
let result = unique(arr);
console.log(result);