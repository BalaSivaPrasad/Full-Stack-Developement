<!DOCTYPE html>
<html lang="en">
<head>
<title>Registration Form</title>
<script>
function validateForm() {
let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let email = document.getElementById("email").value;
let namePattern = /^[A-Za-z][A-Za-z0-9]{5,}$/;
let mobilePattern = /^[0-9]{10}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!namePattern.test(name)) {
alert("Invalid Name! It should start with an alphabet and be at least 6 characters long.");
return false;
}

if (!mobilePattern.test(mobile)) {
alert("Invalid Mobile Number! It should contain exactly 10 digits.");
return false;
}

if (!emailPattern.test(email)) {
alert("Invalid Email! It should follow the format xxxxxxx@xxxxxx.xxx");
return false;
}

alert("Form Submitted Successfully!");
return true;
}
</script>
</head>
<body>
<h2>Registration Form</h2>
<form onsubmit="return validateForm()">
<label>Name:</label>
<input type="text" id="name" required><br><br>

<label>Mobile:</label>
<input type="text" id="mobile" required><br><br>

<label>Email:</label>
<input type="email" id="email" required><br><br>

<button type="submit">Submit</button>
</form>
</body>
</html>
