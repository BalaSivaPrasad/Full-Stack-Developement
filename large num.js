<script>
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));
let largest = Math.max(a, b, c);
if (a === b && b === c) {
document.write("EQUAL NUMBERS");
} else {
document.write(largest + " LARGER NUMBER");
}
</script>
