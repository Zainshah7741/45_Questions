//Question---42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Elon", "Henry", "Stoinus"];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magicians);
function make_great(magic) {
    for (var index = 0; index < magic.length; index++) {
        magic[index] = magic[index] + " the Great";
    }
}
make_great(magicians);
make_great(magicians);
show_magicians(magicians);
