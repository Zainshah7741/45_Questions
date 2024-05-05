//Question---16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guests = ["Suhail", "Ali", "Faheem", "Shoaib"];
console.log("\tGreat News! I found a bigger dinner table.\n");
guests.unshift("Majid");
guests.splice(2, 0, "Zamin", "Arif");
guests.push("Kashif");
for (var index = 0; index < guests.length; index++) {
    console.log("\t".concat(guests[index], ", would you like to join me for dinner?\n"));
}
