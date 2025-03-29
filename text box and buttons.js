<!DOCTYPE html>
<html lang="en">
<head>
<title>JS Functions</title>
</head>
<body>
<h2>Enter a number:</h2>
<input type="number" id="num">
<button onclick="showFactorial()">Factorial</button>
<button onclick="showFibonacci()">Fibonacci</button>
<button onclick="showPrime()">Prime</button>
<button onclick="showPalindrome()">Palindrome</button>
<p id="result"></p>
<script>
function getValue() {
return parseInt(document.getElementById("num").value);
}
function showFactorial() {
let num = getValue();
document.getElementById("result").innerText = "Factorial: " + factorial(num);
}
function showFibonacci() {
let num = getValue();
document.getElementById("result").innerText = "Fibonacci: " + fibonacci(num).join(", ");
}
function showPrime() {
let num = getValue();
document.getElementById("result").innerText = "Prime Numbers: " + primeNumbers(num).join(", ");
}
function showPalindrome() {
let num = getValue();
document.getElementById("result").innerText = isPalindrome(num) ? "Palindrome" : "Not a Palindrome";
}
function factorial(n) {
if (n === 0 || n === 1) return 1;
return n * factorial(n - 1);
}
function fibonacci(n) {
let fib = [0, 1];
for (let i = 2; i < n; i++) {
fib[i] = fib[i - 1] + fib[i - 2];
}
return fib.slice(0, n);
}
function primeNumbers(n) {
let primes = [];
for (let i = 2; i <= n; i++) {
let isPrime = true;
for (let j = 2; j <= Math.sqrt(i); j++) {
if (i % j === 0) {
isPrime = false;
break;
}
}
if (isPrime) primes.push(i);
}
return primes;
}

function isPalindrome(n) {
let str = n.toString();
return str === str.split("").reverse().join("");
}
</script>
</body>
</html>
