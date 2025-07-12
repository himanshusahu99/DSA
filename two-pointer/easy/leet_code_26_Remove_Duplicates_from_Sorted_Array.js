
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/


//Solution 1
// TC O(n)
// SC O(n)
//Idea; Create new array with unique elements while maintain the ansIndex and copy new array element to original array till ansIndex




//Solution 2
// TC O(n)
// SC O(1)
//Idea: Array are sorted, so we can use a single pointer to track the last unique element
// and replace the next element with the current element if it is different from the last unique element
var removeDuplicates = function (nums) {
    const n = nums.length;
    let ansIndex = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[ansIndex]) {
            nums[++ansIndex] = nums[i];
           
        }
    }

    return ansIndex+1;

};