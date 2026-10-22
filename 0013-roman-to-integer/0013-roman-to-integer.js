/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
let result = 0;
for (let i = 0 ; i < s.length; i++ ){
  if(values[s[i]] < values[s[i + 1]]){
     result -= values[s[i]]  // smaller → SUBTRACT
  } else {
    result += values[s[i]]; // otherwise → ADD
  }
}
return result;
};


// time & space complexity - O(n(1)) & O(n(1))
// roman to integer 
// s = "MCMXCIV" "MCMXCIV" → 1994
// smaller before larger → subtract
// otherwise → add