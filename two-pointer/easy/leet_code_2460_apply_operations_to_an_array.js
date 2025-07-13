
//https://leetcode.com/problems/apply-operations-to-an-array/


//Solution 1
// Takes 1ms
// TC O(2n)
// SC O(1)
//Idea; Perform the operation in place and then move all non-zero elements to the front of the array using ansIndex and the push 0 at the end
var applyOperations = function(nums) {

    
    // perform the operation in place
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums[i] *= 2; 
            nums[i+1] = 0; 
        }    
    }

    // move all non-zero elements to the front of the array
    let ansIndex = 0; 
    for(let i =0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[ansIndex++] = nums[i]; 
        }
    }

    // still ansIndex is not equal to nums.length, then we need to fill the rest of the array with 0
    // this is because we have moved all non-zero elements to the front of the array
    // so we need to fill the rest of the array with 0
    for(let i = ansIndex; i<nums.length; i++){
        nums[i] = 0; 
    }

    return nums; 
};



//Solution 2
//takes less then 0ms
// TC O(n)
// SC O(1)
//Idea: We need to remove the second array from first solution
// Maintain a non zero index and swap the element when we find a non zero element

var applyOperations = function(nums) {

    let nonZeroIndex = 0; 
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums[i] *= 2; 
            nums[i+1] = 0; 
        }    

        // Remember: this is good approach to move some elements to the front of the array
        // if the current element is not zero, then we need to swap it with the nonZeroIndex element
        if(nums[i] != 0){
            const temp = nums[i]; 
            nums[i] = nums[nonZeroIndex]; 
            nums[nonZeroIndex++] = temp; 

        }
    }
    return nums; 
};