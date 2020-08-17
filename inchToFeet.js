//we have to convert inch to feet;

//simple way
var inch = 156;

var feet = inch / 12;
//console.log(feet);

//smart way

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(156);
var naniFeet = inchToFeet(123);
var dadaFeet = inchToFeet(134);
var dadiFeet = inchToFeet(234);

console.log(nanaFeet, naniFeet, dadaFeet);
console.log("divide");

//another smartWay (invention by me (akib))

var allInOne = [156, 123, 134, 234];

for (var i = 0; i < allInOne.length; i++) {
    var inch = allInOne[i];
    var feet = inch / 12;
    console.log(feet);
}
