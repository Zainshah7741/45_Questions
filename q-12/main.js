//Question---12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var persons = ["Suhail", "Ali", "Faheem", "Talib"];
for (var i = 0; i < persons.length; i++) {
    console.log("Hello ".concat(persons[i], " would you like to learn some Python today?"));
}
