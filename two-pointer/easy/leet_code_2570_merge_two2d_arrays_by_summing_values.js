
//https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/

//Solution 1 
// TC: o(n + m + KlogK) where K is the number of unique elements in the merged array, in worst case K = n + m
//SC: N + M + K
var mergeArrays = function (nums1, nums2) {
    const ans = [];

    let p1 = 0;
    let p2 = 0;

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1][0] === nums2[p2][0]) {
            ans.push([nums1[p1][0], nums1[p1][1] + nums2[p2][1]])
            p1++;
            p2++;
        } else if (nums1[p1][0] < nums2[p2][0]) {
            ans.push([nums1[p1][0], nums1[p1][1]])
            p1++;
        } else if (nums1[p1][0] > nums2[p2][0]) {
            ans.push([nums2[p2][0], nums2[p2][1]])
            p2++;
        }
    }

    while (p1 < nums1.length) {
        ans.push([nums1[p1][0], nums1[p1][1]])
    }
    while (p2 < nums2.length) {
        ans.push([nums2[p2][0], nums2[p2][1]])
    }

    return ans;

};


console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]))
console.log(mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]))



//Solution 2 
//TC O(n + m )
//SC O(n + m)

var mergeArrays = function (nums1, nums2) {
    const map = new Map();

    for (let i = 0; i < nums1.length; i++) {
        console.log(nums1[i][0])
        if (map.has(nums1[i][0])) {
            const sum = (map.get(nums1[i][0]) || 0) + nums1[i][1];
            map.set(nums1[i][0], sum)
        } else {
            map.set(nums1[i][0], nums1[i][1])
        }
       
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i][0])) {
            
            const sum = (map.get(nums2[i][0]) || 0) + nums2[i][1];
            map.set(nums2[i][0], sum)
        } else {
            map.set(nums2[i][0], nums2[i][1])
        }

    }

    const ans = [];
    map.forEach((value, key) => {
        console.log(value, key)
        ans.push([key, value])
    })

    console.log(map);
    ans.sort((a, b) => (a[0] -  b[0]));

    return ans;
};



/*
Pattern Recognition:
1. Problem talks about merging or joining datasets / logs / records
2. Each input list is already sorted by key
3. Return the merged list sorted by key
4. "Given two/multiple lists of [id, value] or [key, value] pairs..."
    Look for phrasing like:
        1. “...merge them by ID”
        2. “...combine based on the first element”
        3. “...sum values with the same key”

*/