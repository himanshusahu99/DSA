
//https://leetcode.com/problems/remove-element/

//Solution 1
// Idea: Use filter method to remove all elements equal to val 
// TC O(n)
// SC O(n) for the new array created by filter

//Solution 2
// TC O(n)
// SC O(1) In place
//Idea; element should be removed if it is equal to val so we maintain a pointer to track the index of current correct index;
var removeElement = function(nums, val) {
    let index = 0; 
    const n = nums.length; 
    for(let i= 0; i<n; i++){
        if(nums[i] !== val){
            nums[index++] = nums[i]; 
        }
    }

    return index; 
};