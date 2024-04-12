function rotateArray(nums, k) {
    let n = nums.length;
    k = k % n;
    reverseArray(nums, 0, n - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, n - 1);
    return nums; 
}


function reverseArray(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}


let nums = [1, 23, 4, 5, 67];
let k = 2;


rotateArray(nums, k);
console.log(nums);