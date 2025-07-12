
//https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

//Solution 1 
// Takes 27ms
// TC O(n)
// SC O(n)
// Idea: use two pointers to place positive numbers at even indices and negative numbers at odd indices
var rearrangeArray = function(nums) {
    let even = 0; 
    let odd = 1; 
    
    let ans = []; 

    for(let i =0; i<nums.length; i++){
        if(nums[i] < 0){
            ans[odd] = nums[i]; 
            odd+=2; 
        }else {
            ans[even] = nums[i];
            even +=2; 
        }
    }

    return ans; 
};

//Solution 2 (same as solution 1 but uses Int32Array for better performance) 
// Takes 3ms
// TC O(n)
// SC O(n)
// Idea: use two pointers to place positive numbers at even indices and negative numbers at odd indices

var rearrangeArray = function(nums) {
    let even = 0; 
    let odd = 1; 
    
    let ans = new Int32Array(nums.length)

    for(let i =0; i<nums.length; i++){
        if(nums[i] < 0){
            ans[odd] = nums[i]; 
            odd+=2; 
        }else {
            ans[even] = nums[i];
            even +=2; 
        }
    }

    return ans; 
};

