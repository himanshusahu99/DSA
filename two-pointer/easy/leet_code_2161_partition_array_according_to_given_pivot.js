//https://leetcode.com/problems/partition-array-according-to-given-pivot/description/

//Solution 1
// Takes 47ms
// TC O(n)
// SC O(n) => O(smaller + larger + equal)
//Idea:
/* 
        Create three arrays:
        less → elements < pivot
        equal → elements == pivot
        greater → elements > pivot
        Traverse the input nums once, pushing each value into the correct bucket.
        return [...less, ...equal, ...greater];
 */

var pivotArray = function (nums, pivot) {
  const less = [];
  const equal = [];
  const greater = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i]);
    } else if (nums[i] > pivot) {
      greater.push(nums[i]);
    } else equal.push(nums[i]);
  }
  return [...less, ...equal, ...greater];
};


// Solution 2
// Takes 4ms
// TC O(n)
// SC O(n)
//Idea: 
/*
    1. Create an array ans of the same length as nums.
    2. Use two pointers, traverse from start to end and end to start and push the elements into same index of ans; 
*/

var pivotArray = function(nums, pivot) {
    const ans = new Int32Array(nums.length); 
    let start = 0; 
    let end = nums.length-1; 
    const n = nums.length 

    //first push all elements less than pivot to the start of ans and all elements greater than pivot to the end of ans
   for(let i =0; i<n; i++){
    //traverse from start to end 
        if(nums[i] < pivot){
            ans[start] = nums[i]; 
            start++; 
        }
        // traverse from end to start
        if(nums[n-1-i] > pivot){
            ans[end] = nums[n-1-i]; 
            end--
        } 
    }

    // now if start <= end, it means there are elements equal to pivot, so we can fill the remaining indices with pivot
    while(start <= end){
        ans[start++] = pivot; 
    }

    return ans; 
};