<script>
let num = parseInt(prompt("Enter a number:"));
let sum = 0, temp = num;
while (temp > 0) {
let digit = temp % 10;
sum += digit ** 3;
temp = Math.floor(temp / 10);
}
alert(num === sum ? "Armstrong Number" : "Not an Armstrong Number");
</script>
