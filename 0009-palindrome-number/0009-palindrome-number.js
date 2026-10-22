/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(inputNumber) {
    // Palindrome = its same from both side when reading 
    // negative and less than 0 are never palindrome
    // const reverseString = inputNumber.toString().split("").reverse().join("");
    // return reverseString === inputNumber.toString()

    if (inputNumber < 0 ){
        return false;
    }
  
     if (inputNumber < 10){
        return true;
     }

      let reverseNumber = 0; 
      let digitsLeft = inputNumber; 

      while (digitsLeft > 0){ 
        const lastDigit = digitsLeft % 10;  // 9 = Gets the last digit of 109
        digitsLeft = Math.floor(digitsLeft / 10); // 10 =  109 / 10 = 10.9, Math.floor(10.9) = 10
        reverseNumber = reverseNumber * 10 + lastDigit; // 9 =  (0 * 10) + 9 = 9
   
      }


        return inputNumber === reverseNumber;

};