//Test to run programs
//Start file with Quokka using Ctrl+K, Q


//! Pointer solution
//! #5 Medium Problem
// var longestPalindrome = function(s) {

//     if (s === s.split('').reverse().join('')) return s;
//     let subString = s[0];

//     for (let i = 0; i < s.length; i++) {
//         let left = i - 1;
//         let right = i + 1;
//         let curr = s[i];

//         while (s[i] === s[left]) {
//             curr += s[left];
//             left--;
//         }
//         while (s[left] === s[right]) {
//             curr = s[left] + curr + s[right];
//             left--;
//             right++;
//         }
//         if (curr.length > subString.length) {
//             subString = curr;
//         }
//     }

//     return subString;
// };



//! Convertion of Array
/**
 * Given an array of words of upper and lower case letters, return a sentence in a Camel Case format.
 *
 * PC:
 * A simple approach to this problem, would be to iterate through the array and individual string, and at j = 0, uppercase the letter. Then at the end of the second loop, add the string.
 * A problem with this approach is that in the second iteration (each string) there can be multiple strings. so we need to find them and camel case them.
 *
 */

var testing = function (arr) {
    let output = "";

    for (let word of arr) {
        //word => "COdE everyDAy"
        //we want to convert word into "Code Everyday" and add it to the string.

        let sentence = '';
        for (let i = 0; i < word.length; i++) {
            let char = word[i] // C;

            if (i === 0 || word[i-1] === " ") {
                sentence += char.toUpperCase(); // C
            } else {
                sentence += char.toLowerCase(); // o
            }

        }
        output += sentence + " "; // "" => "Code"
    }
    return output;
}

// var testing = function(arr) {
//     let output = "";

//     for(let word of arr) {
//         //word => "COdE everyDAy"
//         //we want to convert word into "Code Everyday" and add it to the string.
//         let temp = word.split(' ')

//         for(let sen of temp) {
//             let sentence = '';
//             //sen => COdE

//             for(let i = 0; i < sen.length; i++) {
//                 let char = sen[i] // C;

//                 if(i === 0) {
//                     sentence += char.toUpperCase(); // C
//                 } else {
//                     sentence += char.toLowerCase(); // o
//                 }

//             }
//             output += sentence + " "; // "" => "Code"
//         }
//     }

//     return output;
// }
let arr = [
    "AnNiruddHA Routh",
    "LOVES", "to",
    "COdE everyDAY"
];

console.log(testing(arr));
