//Question---41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Elon", "Henry", "Stoinus"];
function magician(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
magician(magicians);
export {};
