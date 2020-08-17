// find who is bigger
// simple way
var business = 250;
var minister = 350;
var sochib = 450;

/* if (business > minister) {
    if (business > sochib) {
        console.log("business is bigger");
    } else {
        console.log("sochib is bigger ");
    }
} else {
    if (minister > sochib) {
        console.log("minister is bigger");
    } else {
        console.log("sochib is bigger");
    }
} */

// smart way

var max = Math.max(business, minister, sochib);
console.log(max);
