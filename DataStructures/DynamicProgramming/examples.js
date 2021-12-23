
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.



var maxSubArray = function(nums) {
    let maxN = nums[0];
    let currentN = 0;
    for (let n of nums) {
        currentN = currentN < 0 ? n : currentN + n;
        maxN = Math.max(currentN, maxN);
    }
    return maxN;
};
 