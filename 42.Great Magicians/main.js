//Define a Function to console magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define a Function to console magician names wth "The great"
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
//Define an Array to console magician names
var magician_Names = ["Sikandar", "Babar", "Iqbal", "Sajid"];
var great_magicians = make_great(magician_Names);
show_magicians(great_magicians);
