function findDuplicates(arr){
    return arr.filter((element,index)=>{
        arr.indexOf(element,index)!==-1;
    });
}

const array = [1,2,3,2,5]
const duplicate = findDuplicates(array);
console.log("Duplicate elements:",duplicate);