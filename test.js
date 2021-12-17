//Test to run programs
//Start file with Quokka using Ctrl+K, Q


//! Pointer solution
//! #5 Medium Problem
var longestPalindrome = function(s) {

    if (s === s.split('').reverse().join('')) return s;
    let subString = s[0];

    for (let i = 0; i < s.length; i++) {
        let left = i - 1;
        let right = i + 1;
        let curr = s[i];

        while (s[i] === s[left]) {
            curr += s[left];
            left--;
        }
        while (s[left] === s[right]) {
            curr = s[left] + curr + s[right];
            left--;
            right++;
        }
        if (curr.length > subString.length) {
            subString = curr;
        }
    }

    return subString;
};

