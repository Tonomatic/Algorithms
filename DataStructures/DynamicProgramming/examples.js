
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

/*
Given an array of numbers and a target number, return all possible ways you can sum up the numbers to equat the target number.
You can use the same individual numbers in array more then once.

EX: n = 4, arr = [1, 2, 3]      return 4
1. 1 + 1 + 1 +1
2. 1 + 3
3. 2 + 2
4. 1 + 1 + 2

*/


const coinChange = function(target, coins, i = 0) {
    //We want to recursively call the function and subtract from target at coins[i];

    let coin = coins[i]; // 1
    let total = 0;
    //everytime our target is equal to 0, we increase the count by one
    if(target === 0) return 1;

    for(let qty = 0; (qty * coin) <= target; qty++) {
        let remainder = target - (qty * coin) // at 0, we recursively go to remainder being the same. At 1, we recursively call the remainder being 3

        total += coinChange(remainder, coins, (i+1));

    }




    return total;

}

console.log(coinChange(4, [1, 2, 3]))
