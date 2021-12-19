
// Valid Parentheses


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    let stack = [];
    if(s.length % 2 !== 0) return false;

    let pairs = { '(': ')', '[': ']', '{': '}'}
    for(let i = 0; i < s.length; i++) {
        let char = s[i]; // {

        if(pairs[char]) {
            stack.push(char)
        } else {
            if(pairs[stack[stack.length-1]] !== char) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return true;
}
