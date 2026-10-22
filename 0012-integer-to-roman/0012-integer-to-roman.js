/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // have integer
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let roman = "";

  for(let i = 0; i < values.length; i++){
    while(num >= values[i]){
       roman+= symbols[i];
         num-=values[i];
    }
  }
    return roman;
};
// Time & Space Complexity - O(n(1)) - fixed values/symbols
// given num
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest
// decimals - roman numerals - 
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

// special subtractive forms
// 4   = IV
// 9   = IX
// 40  = XL
// 90  = XC
// 400 = CD
// 900 = CM 

// num = 3749 return "MMMDCCXLIX"
// 3749
//  ↓
// 3000 + 700 + 40 + 9
//  ↓
// MMM  + DCC + XL + IX
//  ↓
// "MMMDCCXLIX"


// Given:
// An integer num
// 1 <= num <= 3999

// Need:
// Convert the integer into a Roman numeral
// Return the Roman numeral as a string

// Example:
// 3749 → "MMMDCCXLIX" 
// select the symbol of the maximal value that can be subtracted - Take the biggest value you can

/**
values + symbols
       ↓
for loop through values
       ↓
check num >= values[i]
       ↓
while → because symbols can repeat
       ↓
add symbol
       ↓
SUBTRACT value
       ↓
return roman
 */