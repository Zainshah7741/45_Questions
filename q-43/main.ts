//Question---43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Elon", "Henry", "Stoinus"];

function show_magicians(magicians: string[]) {
  magicians.forEach((element) => {
    console.log(element);
  });
}

function make_great(magician) {
  let newGreat: string[] = [];
  magician.forEach((element) => {
    newGreat.push(element + " the great");
  });
  return newGreat;
}

let greatMagician = make_great(magicians);

// Original
show_magicians(magicians);

// Modified
show_magicians(greatMagician);
