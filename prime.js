// check the number is prime or not

function isPrime(n) {
    var n = n;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return "not a prime num";
        }
    }
    return "your number is a prime number";
}
var result = isPrime(128);
console.log(result);
