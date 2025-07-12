
//https://leetcode.com/problems/rotate-array/description/


//Solution 1
// TC O(n)
// SC O(n)
//Idea: first push the last k elements to the front of the array and then push the first n-k elements to the end of the array
//Note     k = k%n is needed to handle the case when k is greater than n

var rotate = function(nums, k) {
   const ans = []; 
   const n = nums.length;
   let currentIndex = 0; 

   // !important when k is greater than n, we need to take k modulo n
   k = k%n; 

   // first push the last k elements to the front of the array
   for(let i = ( n - k); i<nums.length; i++){
    ans[currentIndex++] = nums[i]; 
   }

   // then push the first n-k elements to the end of the array
   for(let i =0 ; i<(n-k) ;i++){
    ans[currentIndex++] = nums[i]; 
   }

   // copy the ans array to the original nums array
   for(let  i =0; i<nums.length; i++){
    nums[i] = ans[i]
   }

}


//Solution 2
// TC O(n)
// SC O(1)
//Idea: reverse the entire array, then reverse the first k elements and then reverse the last n-k elements

const reverse = (nums, left, right) => {
    while(left < right) {
        let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        left++; 
        right--;
    }
}

var rotate = function(nums, k) {
  const n = nums.length; 
  k = k % n;
  //reverse the entire array [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1]
  reverse(nums, 0, n-1); 

  //reverse the first k elements [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1]
  reverse(nums, 0, k-1); 

  //reverse the last n-k elements [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]
  reverse(nums, k, n-1); 
};

/*
Note: 

Tradition swapping => 
let temp = nums[left];
nums[left] = nums[right];
nums[right] = temp;

is faster than Destructuring swap => 
[nums[left], nums[right]] = [nums[right], nums[left]];

Because 
    It's syntactic sugar, but under the hood, it's more work:

    Temporary object (array) creation.

    Element access via property lookup.

    Potential deoptimization for performance-sensitive loops.


*/