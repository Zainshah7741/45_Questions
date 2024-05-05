//Question---15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guests = ["Suhail", "Ali", "Faheem", "Talib"];
var unableToAttend = "Talib";
console.log(unableToAttend, "can't make it to dinner.\n");
var newGuest = "Shoaib";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(function (guest) {
    console.log("".concat(guest, ", would you like to join me for dinner?"));
});
