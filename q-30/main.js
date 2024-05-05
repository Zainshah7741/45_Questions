//Question---30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var user_names = [
    "admin",
    "Suhail",
    "Ali",
    "Talib",
    "Saqlain",
    "Shoaib",
];
user_names.forEach(function (element) {
    if (element == "admin") {
        console.log("\nHello admin, would you like to see a status report?\n");
    }
    else {
        console.log("Hello ".concat(element, ", thank you for logging in again."));
    }
});
