var guestList = ["Waseem", "Asad", "Faisal", "Raheel"];
var guest1 = guestList[0];
console.log(guest1, "can not come to dinner today.");
guestList.splice(0, 1, "Hyder");
guestList.forEach(function (guests) { return console.log("Hi ".concat(guests, ", would you like to dinner today?")); });
