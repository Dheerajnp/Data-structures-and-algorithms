function binarySearch(arr,target){
    let left = 0;
    let right = arr.length;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            return mid;
        }else if(target<arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1
}

let sortArr = [2,4,8,9,13,16,22];
console.log(binarySearch(sortArr,1))