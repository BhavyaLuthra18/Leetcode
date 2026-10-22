/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // brute force 
// for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1 ; j < nums.length; j++){
//     if (nums[i] + nums[j] === target){
//         return [i,j];
//       }
//     }
// PATTERN : HASHMAP 
// return indices [key , values ]
   const map = new Map();

  for (let i = 0; i < nums.length; i++){
    const needed = target - nums[i];
    if (map.has(needed)){
        return [map.get(needed), i]
    }else {
        map.set(nums[i] ,i)
    }

  }
  
}


