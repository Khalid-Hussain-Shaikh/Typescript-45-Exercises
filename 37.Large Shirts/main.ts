function make_shirt(
  size: string = "Large",
  printMessage: string = "I love Typescript"
) {
  console.log(
    `make a ${size} size shirt with the ${printMessage} on that shirt`
  );
}
make_shirt();

make_shirt("Medium");

make_shirt ("Small");