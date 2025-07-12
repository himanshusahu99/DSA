
//https://leetcode.com/problems/merge-sorted-array/description/


//TC O(n + m)
//SC O(1)

var merge = function (a , m, b, n) {

    let p1 = m-1; 
    let p2 = n-1; 
    let index = m + n - 1; 


    while (p1 >= 0 && p2 >= 0) {
        if (a[p1] > b[p2]) {
            a[index--] = a[p1--];  
        } else {
            a[index--] = b[p2--];  
        }
    }

    while (p2 >= 0) {
        a[index--] = b[p2--];  
    } 
   
};

const arr1 = [4, 5, 6, 0, 0, 0]
merge(arr1, 3, [1, 2, 3], 3)
console.log( arr1)



/*
Other Solutions
1. Copy arr2 to end of arr1 and sort it
2. Use two pointers but maintain a extra array to store the result
*/