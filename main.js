//Задание 1
function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
      console.log('Число должно быть в диапозоне от 0 до 999.');
      return {};
    }
    return {
      firstDigit: num % 10,
      secondDigit: Math.floor(num / 10) % 10,
      thirdDigit: Math.floor(num / 100),
    };
  }

  console.log(getDigitsOfNumber(526));

//Задание 2

    const cart = {
        goods: [
          {
            product: "Рубашка",
            price: 75,
            quantity: 1,
          },
          {
            product: "Брюки",
            price: 105,
            quantity: 1,
            
          }
        ],
        countBasketPrice(cart) {
          return this.goods.reduce((finalPrice, cartItem) => (finalPrice += cartItem.price),
          0);
        }
      };
  
      console.log("Final price: ", cart.countBasketPrice(cart));