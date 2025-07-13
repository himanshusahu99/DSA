
//https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/


//Solution 1
// Takes401ms
// TC O(n*k + nlogn) where k is end - start, but in worst case it can be k = n , so it can be O(n^2)
// SC O(n)
//Idea; 
/* 
    Each occurrence of key at index i can mark every index from i - k to i + k, which spans entire array (with bounds check).
*/
var findKDistantIndices = function(nums, key, k) {
  const result = new Set();
    for(let i =0; i<nums.length; i++){
        if(nums[i] === key){
            // start will be i - k,
            const start = Math.max(0, i - k); 

            // end will be i + k, but it should not exceed the length of the array
            const end = Math.min(nums.length-1, i+k); 

            // in worst case, it will run n times
            for(let j = start; j<=end; j++){
                result.add(j); 
            } 
        }
    }

    return [...result].sort((a ,b ) => a-b)
    
};



// Solution 2
// Takes 1ms
//O(n), inner loop runs at most n times because we are maintaining last index
// idea: 
// we need to run inner loop only n times, so we need to maintain a last index variable

var findKDistantIndices = function(nums, key, k) {
    let ans = []
    let last = -1
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]===key) {
            const start= Math.max(last+1,i-k); 
            const end = Math.min(nums.length-1,i+k)
            // inner loop will run at most n times
            for(let j = start; j<=end; j++) {
                ans.push(j)
                last = j
            }
            // no need to sort the ans array as we are pushing the elements in sorted order
        }
    }
    return ans
    
};
