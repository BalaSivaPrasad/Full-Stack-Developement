<script>
let person = { name: "John", age: 25, city: "New York" };

console.log("Using for-in:");
for (let key in person) console.log(key + ":", person[key]);

console.log("Using for-of:");
let arr = ["Apple", "Banana", "Cherry"];
for (let item of arr) console.log(item);

console.log("Using forEach:");
arr.forEach(item => console.log(item));
</script>
