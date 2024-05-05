//Question---32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Zain", "Suhail", "Ali", "Amjad", "Talib"];
var new_users = ["zain", "Faheem", "ALI", "Shoaib", "Kashif"];
new_users.forEach(function (element) {
    if (current_users.some(function (current_User) { return current_User.toLowerCase() === element.toLowerCase(); })) {
        console.log(element + " will need to enter a new username.");
    }
    else {
        console.log(element + " username is available.");
    }
});
