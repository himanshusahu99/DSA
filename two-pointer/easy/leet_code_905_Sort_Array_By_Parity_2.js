
//https://leetcode.com/problems/sort-array-by-parity-ii/


//Solution 1
// Using two Pointer with extra array
// add value at even index if number is even and at odd index if number is odd using extra array
var sortArrayByParityII = function(nums) {
    let p1 = 0; 
    let p2 = 1; 

    const ans = [];
    for(let i= 0; i<nums.length; i++){
        if(nums[i]%2 != 0){
            ans[p2] = nums[i]
            p2+=2; 
        }else {
             ans[p1] = nums[i]
             p1+=2
        }
    }
    return ans; 
};


// solution 2
// using two pointers without an extra array
/*
    1. If nums[even] is even, it's in the right place — move even forward.

    2. Else if nums[odd] is odd, it's in the right place — move odd forward.

    3. Else:

        Both are misplaced: nums[even] is odd, and nums[odd] is even.

        So you swap them to place them in correct parity positions.
 */
var sortArrayByParityII = function(nums) {
   let even = 0; 
   let odd = 1; 

 while(even < nums.length && odd < nums.length){
    if(nums[even]%2== 0){
        even+=2; 
    }else if(nums[odd]%2 == 1){
        odd+=2
    } else {
        [nums[even], nums[odd]] = [nums[odd], nums[even]]; 
    }
   }

   return nums; 
};