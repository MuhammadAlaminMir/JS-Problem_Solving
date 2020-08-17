// we have to swap those variable
// normal way
var a = 5;
var b = 7;

// console.log("before swap a =", a, "b =", b);

var temp = a;
var a = b;
var b = temp;
// console.log("after swap a =", a, "b =", b);

// smart way

var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap x =", x, "y =", y);

// advanced way
// this system only work in js;
var p = 5;
var q = 7;
[p, q] = [q, p];
// console.log("after swap p =", p, "q =", q);

// functional way

function swap(first, last) {
    var x = first;
    var y = last;
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y);
}

var result = swap(5, 7);
