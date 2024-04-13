function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following itmes:");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("Now Enjoy Sandwich");
}
// Call the function three times, using a different number of arguments each time.
make_Sandwich("Chicken", "Cheese", "Mayo", "Egg");
make_Sandwich("Bread", "Butter");
make_Sandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg");
