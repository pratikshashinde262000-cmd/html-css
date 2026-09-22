// Assignment 2 - Login & Access System

let username = "admin";
let password = "1234";
let isAccountActive = true;
let isAdmin = true;

// Login details entered by user
let enteredUsername = "admin";
let enteredPassword = "1234";

// Check login conditions
if (
    enteredUsername === username &&
    enteredPassword === password &&
    isAccountActive === true
) {
    console.log("Login successful");
    console.log("Access granted");

    // Challenge: Display Admin Dashboard only for admin
    if (isAdmin === true) {
        console.log("Admin Dashboard");
    }
} else {
    console.log("Login failed");
    console.log("Access denied");
}
