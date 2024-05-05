"use strict";
//Question---24
Object.defineProperty(exports, "__esModule", { value: true });
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
console.log("Zain" == "Zain"); //True
console.log("zain" !== "zain"); //False
// • Tests using the lower case function
console.log("Zain".toLowerCase() == "zain"); //True
console.log("Zain".toLowerCase() != "zain"); //False
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(10 != 10); //False
console.log(7 == 7); //true
// Greater than & Less than
console.log(!(1 > 5)); //True
console.log(1 > 5); //False
console.log(100 < 50); //False
console.log(-0.5 < -0.1); //True
// greater than or equal to, and less than or equal to
console.log(10 >= 10 && 0.2 > -5); //True
console.log(5 >= 50); //False
// • Tests using "and" and "or" operators
console.log(10 == 10 && 5 != 5); //False
console.log(10 == 10 || 5 != 5); //True
console.log(-25 > -50 && 30 >= 22); //True
console.log(-252 > -50 || 30 <= 22); //False
// • Test whether an item is in a array
let cities = ["Karachi", "Jamshoro", "Hyderabad", "NawabShah"];
console.log(cities.includes("Jamshoro")); //True
// • Test whether an item is not in a array
console.log(cities.includes("Sukkur")); //False
