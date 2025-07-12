
//https://leetcode.com/problems/sort-array-by-parity/description/


//Solution 1
// use shift to push even numbers to the front and push odd numbers to the end
var sortArrayByParity = function(nums) {
; 
    const ans = []; 

    for(let i =0; i<nums.length; i++){
        if(nums[i]%2 === 0) {
            ans.unshift(nums[i]); 
        }else  ans.push(nums[i]); 
    }

    return ans; 
};

// solution 2
// using two pointers with an extra array
// Idea:  use p1 to push even numbers and p2 to push odd numbers
var sortArrayByParity = function(nums) {
    let  p1 = 0; 
    let  p2 = nums.length - 1; 
    const ans = []; 

    for(let i =0; i<nums.length; i++){
        if(nums[i]%2 === 0) {
            ans[p1++] = nums[i];  
        }else  {
               ans[p2--] = nums[i];  }
    }

    return ans; 
};


// solution 2
// using two pointers without an extra array
// Idea => move all odd numbers to the end of the array
var sortArrayByParity = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while(l < r){

        if(nums[l]%2 !== 0 && nums[r]%2 === 0){
            let temp = nums[r];
            nums[r] = nums[l];
            nums[l] = temp;
        }
        if(nums[l]%2 === 0){
            l = l + 1;
        }
        if(nums[r]%2 !== 0){
            r = r - 1;
        }
    }
    return nums;
};

// solution 3
// using filter method
// Idea: filter even and odd numbers separately and concatenate them
var sortArrayByParity = function(nums) {
    const even = nums.filter(num => num % 2 === 0);
    const odd = nums.filter(num => num % 2 !== 0);
    return [...even, ...odd];
};
