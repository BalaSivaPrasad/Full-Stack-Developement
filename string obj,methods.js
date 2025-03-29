<script>
let str = "JavaScript is Awesome!";
console.log("Original String:", str);
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Substring(0, 10):", str.substring(0, 10));
</script><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript Example</title>
<script src="scripts/external.js"></script>
<script>
function internalJS() {
alert("This is internal JavaScript!");
}
</script>
</head>
<body>
<button onclick="internalJS()">Internal JS</button>
<button onclick="externalJS()">External JS</button>
</body>
</html>
