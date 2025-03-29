<script>
let amount = parseInt(prompt("Enter amount:"));
let denominations = [100, 50, 20, 10, 5, 2, 1];
let result = "";

for (let note of denominations) {
if (amount >= note) {
let count = Math.floor(amount / note);
amount %= note;
result += `${count} x Rs.${note}<br>`;
}
}

document.write(result);
</script>
