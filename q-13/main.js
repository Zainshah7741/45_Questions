//Question---13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transport = [
    "Kawasaki Ninja 300",
    "Rolls-Royce",
    "Hummer",
    "Suzuki Mehran",
];
transport.forEach(function (vehicles) {
    console.log("I would like to own a \"".concat(vehicles, "\""));
});
