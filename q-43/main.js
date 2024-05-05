//Question---43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Elon", "Henry", "Stoinus"];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
function make_great(magician) {
    var newGreat = [];
    magician.forEach(function (element) {
        newGreat.push(element + " the great");
    });
    return newGreat;
}
var greatMagician = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagician);
show_magicians(magicians);
