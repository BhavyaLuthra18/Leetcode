/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let max = 0;
  
    let seen = new Set()
    for (let right = 0 ; right < s.length; right++){
      let char = s[right];
       while (seen.has(char)){
        seen.delete(s[left]);
        left++
       }
      seen.add(char);
      let windowLength = right - left + 1;
      max = Math.max(max , windowLength);
    }
    
      return max;

};
// s - letters , digits , symbols and spaces 
// pattern : sliding window 
/// time  & space complexity : O(n)
// key words: substring , string , 
// no repeating / duplicates 
// pairs made in window size 
// substring
//     ↓
// continuous range
//     ↓
// longest
//     ↓
// maintain a window
//     ↓
// Sliding Window
// right  → tells us WHERE
// s[right] → tells us WHAT character
// seen   → remembers characters
