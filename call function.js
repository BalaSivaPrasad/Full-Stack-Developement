<script>
// Function to calculate factorial
function factorial(n) {
if (n === 0 || n === 1) return 1;
return n * factorial(n - 1);
}

// Function to generate Fibonacci series
function fibonacci(n) {
let fib = [0, 1];
for (let i = 2; i < n; i++) {
fib[i] = fib[i - 1] + fib[i - 2];
}
return fib.slice(0, n);
}

// Function to check for prime numbers
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

// Function to check palindrome
function isPalindrome(n) {
let str = n.toString();
return str === str.split("").reverse().join("");
}

// Testing
let num = parseInt(prompt("Enter a number:"));
console.log("Factorial:", factorial(num));
console.log("Fibonacci:", fibonacci(num));
console.log("Prime numbers:", primeNumbers(num));
console.log("Palindrome:", isPalindrome(num));
</script>
