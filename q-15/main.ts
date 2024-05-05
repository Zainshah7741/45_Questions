//Question---15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests: string[] = ["Suhail", "Ali", "Faheem", "Talib"];

let unableToAttend = "Talib";
console.log(unableToAttend, "can't make it to dinner.\n");

let newGuest = "Shoaib";
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach((guest) => {
  console.log(`${guest}, would you like to join me for dinner?`);
});
