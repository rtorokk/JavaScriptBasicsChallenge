// Task 1 - Employee Information
// Declare a variable for the employee's name and assign it a string value.
let employeeName = "John Smith";
// Declare a variable for the employee's ID and assign it a numeric value.
const employeeID = 101;
// Declare a variable for the employee's active status and assign it a boolean value.
var isActive = true;

//Log the employee's name and its type (string) to the console.
console.log("Employee Name:", employeeName, "-", typeof employeeName);
//Log the employee's ID and its type (number) to the console.
console.log("Employee ID:", employeeID, "-", typeof employeeID);
//Log the employee's active status and its type (boolean) to the console.
console.log("Active:", isActive, "-", typeof isActive);

// Task 2 - Product Details
// Declare a variable for the product's name and assign it a string value.
let productName = "Smartphone";
// Declare a variable for the product's price and assign it a numeric value.
const productPrice = 500;
// Declare a variable for the product's availability and assign it a boolean value.
var isAvailable = true;
//Log the product's name and its type (string) to the console.
console.log("Product Name:", productName, "-", typeof productName);
//Log the product's price and its type (number) to the console.
console.log("Product Price:", productPrice, "-", typeof productPrice);
//Log the product's availability and its type (boolean) to the console.
console.log("Available:", isAvailable, "-", typeof isAvailable);

// Task 3 - Financial Transactions
// Declare a variable for the transaction amount and assign it a numeric value.
let accountBalance = 1000;
accountBalance -= 500;// withdraw
console.log("Account Balance after withdrawal:", accountBalance); //500

accountBalance += 200;// deposit
console.log("Account Balance after deposit:", accountBalance); //700

accountBalance *= 1.05;// interest
console.log("Account Balance after interest:", accountBalance); //735

accountBalance /= 2;// half the balance
console.log("Account Balance after halving:", accountBalance); //367.5

// Task 4 - Customer Messaging
// Declare a variable for the welcome message and assign it a string value.
let customerName = "Alice";
// Concatenate the customer's name with the welcome message.
let welcomeMessage = "Welcome, " + customerName + "! We're glad to have you!";
//Log the welcome message to the console.
console.log(welcomeMessage);

// Task 5 - Access Control
// Declare a variable for the user's role and assign it a string value.
let isLoggedIn = true;
// Check if the user is logged in and log a message based on their role.
if (isLoggedIn) {
  console.log("User is logged in. Access granted.");
} else {
  console.log("User is not logged in. Access denied.");
}
// Declare a variable for the admin rights and assign it a boolean value.
let hasAdminRights = false;
// Check if the user has admin rights and log a message based on the combined conditions.
console.log("User has admin rights:", isLoggedIn && hasAdminRights);
console.log("General Access:", isLoggedIn || hasAdminRights);
