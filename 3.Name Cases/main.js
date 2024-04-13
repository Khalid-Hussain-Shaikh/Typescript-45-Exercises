var personName = "Khalid Shaikh";
console.log("Lower Case =", personName.toLowerCase());
console.log("Upper Case =", personName.toUpperCase());
console.log("Title Case =", personName.replace(/\b\w/g, function (chase) { return chase.toUpperCase(); }));
