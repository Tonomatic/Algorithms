
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


/*
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
*/


//this problem, solves the fib sequence by adding an object, that saves values that
//we iterate on
const fib = function(num, obj = {}) {

    if(num === 1) return num;
    if(num === 2) return num;

    if(obj[num]) return obj[num]

    //remember to pass in the obj. You won't get an error, but the obj wont change
    obj[num] = fib(num-1, obj) + fib(num-2, obj);

    return obj[num]
}
