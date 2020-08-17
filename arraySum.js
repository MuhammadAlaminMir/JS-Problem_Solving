// summation of an array
// simple way
var nums = [45, 65, 75, 35, 34, 75, 85];

var sum = 0;

for (var i = 0; i < nums.length; i++) {
    var element = nums[i];
    sum = sum + element;
}
// console.log("total :", sum);

// smart way

function getArraySum(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var element = nums[i];
        sum = sum + element;
    }
    return sum;
}
var nums = [45, 65, 75, 35, 34, 78, 85];

// var result = getArraySum(nums);
var result = getArraySum([23, 56, 90, 02, 60]);

console.log("total :", result);
