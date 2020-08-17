//fibonacci is sequence in this sequence a number is a sum of its first 2 number like:
// fibonacci = 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

// fibo[2] = fibo[2-1] + fibo[2-2]
// fibo[3] = fibo[3-1] + fibo[3-2]
// fibo[4] = fibo[4-1] + fibo[4-2]
// fibo[5] = fibo[5-1] + fibo[5-2]
// fibo[n] = fibo[n-1] + fibo[n-2]
// fibo[i] = fibo[i-1] + fibo[i-2]

//iterative way to get fibonacci sequence

var fibo = [0, 1];

for (var i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
}
console.log(fibo);

// smart way to get fibonacci sequence

function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacci(15);
// console.log(result);

// recursive way to get fibonacci

// in that function we will got the final result

function fiboRecursive1(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fiboRecursive1(n - 1) + fiboRecursive1(n - 2);
    }
}
var result2 = fiboRecursive1(10);
console.log(result2);

// recursive way to get fibonacci sequence

function fiboRecursive2(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return [0, 1];
    } else {
        // calculate array nth element
        var fibo = fiboRecursive2(n - 1);
        var fibo2 = fibo[n - 1] + fibo[n - 2];
        fibo.push(fibo2);
        return fibo;
    }
}
var result2 = fiboRecursive2(10);
console.log(result2);
