//Question---11

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Suhail", "Ali", "Faheem", "Talib"];

names.forEach((element, index) => {
  console.log(index + " " + element);
});
