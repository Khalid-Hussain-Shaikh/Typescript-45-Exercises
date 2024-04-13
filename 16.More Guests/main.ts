let guestlist = ["Waseem", "Asad", "Faisal", "Raheel"];
let Guest1 = guestlist[0];
guestlist.splice(0, 1, "Hyder");
console.log("We have found a bigger Dinner Table for Respectable Guests")
guestlist.unshift("Ghualm Mustafa");
guestlist.push("Iqbal");
let middleGuest: number = Math.floor(guestlist.length / 2);
guestlist.splice(middleGuest, 0, "Mumtaz");
console.log("Our new Guests are updated list");
console.log(Guest1, "can not come to Dinner today.");
guestlist.forEach(guests=>console.log(`Hi ${guests}, would like to Dinner with me?`));