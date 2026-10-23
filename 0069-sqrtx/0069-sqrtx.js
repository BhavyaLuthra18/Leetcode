/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // x - return square root of x rounded down to the nearest integer 
    // returned integer should be non-negaative as well
    // usage of math.floor() - to go the end integer 
     if (x === 0) return 0;
    let left = 1 ;
    let right = x;
    while (left <= right){
        let mid = Math.floor((left + right) / 2 );
        if (mid * mid > x ){
            right = mid - 1;
        }
        if(mid * mid < x){
            left = mid + 1;
        }
        if (mid * mid === x){
            return mid; 
        } 
    }
  return right ;
};


// GIVEN:

// A non-negative integer x


// NEED:

// Find the square root of x √16 = 4  
// Return it rounded DOWN to the nearest integer √20 = 4.472... → 4

// In other words:
// Find the largest integer n such that:
// n * n <= x


// Cannot use:
// Math.sqrt()
// exponent operator


// Example:
// x = 4 → 2
// x = 8 → 2