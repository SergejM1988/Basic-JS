// Задание 1
function simpleNum() {
  let i = 2;
  while (i <= 100) {
    let division = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        division++;
      }
    }
    if (division < 3) console.log(i);
    i++;
  }
}
simpleNum();

//Задание 2

const cart = [
  ["Рубашка", 1, 75],
  ["Брюки", 1, 120],
];

function countBasketPrice(cart) {
  return cart.reduce(
    (finalPrice, [_, amount, price]) => (finalPrice += price * amount),
    0
  );
}

console.log("Final price: ", countBasketPrice(cart));

//Задание 3
for (let i = 0; i < 10; console.log(i++)) {}

//Задание 4

for (let x = 0; x < 20; x++) {
  let str = "";
  for (let y = 0; y <= x; y++) {
    str += "X";
  }
  console.log(str);
}
