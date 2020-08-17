// factorial means a character which characters will multiply by every characters
//until those character up to the same characters. like:
// 10 = 1*2*3*4*5*6*7*8*9*10

//simple way
// var factorial = 1;

// for (var i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

//or
// var factorial = 10;

// for (var i = 1; i >= 10; i--) {
//     factorial = factorial * i;
//     console.log(i, factorial);

//smart way
// function factorial(num) {
//     var factorial = 1;
//     for (var i = 1; i <= num; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var result = factorial(5);

//console.log(result);

// Factorial using while loop
// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;

//     i++;
// }
// console.log(factorial);

// // or

// var i = 0;
// var factorial = 1;
// while (i >= 10) {
//     factorial = factorial * i;
//     i--;
// }

// //smart way

// function factorialRes(n) {
//     var i = 1;
//     var factorial = 1;
//     while (i <= n) {
//         factorial = factorial * i;

//         i++;
//     }
//     return factorial;
// }
// var result = factorialRes(10);
// console.log(result);

//  Get factorial in recursive way :
// 10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3 or 2! *3
// 4! = 1*2*3*4 or 3!*4
// 5! = 1*2*3*4*5 or (5-1)!*5
// n! = (n-1)!*n

//when we call a function into that function its call recursive function
//thats means that function recurs it self

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var result = factorial(10);

console.log(result);
