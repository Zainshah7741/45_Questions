//Question---12
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Suhail", "Ali", "Faheem", "Talib"];
names.forEach(function (element, index) {
    console.log(index + " " + element);
});
