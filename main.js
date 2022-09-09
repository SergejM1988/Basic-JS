"use strict";
//Задание 1. Не до конца смог разобраться как написать буквы и цифры
function createChess() {
  let chess = document.querySelector(".chess-div");
  console.log(chess);
  let num = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (num % 2 == 0) {
        chess.innerHTML += "<div class = 'chess-new'></div>";
      } else {
        chess.innerHTML += "<div class = 'chess-new black'></div>";
      }
      num++;
    }
    num++;
  }
}
createChess();

//Задание 2. Тоже сам не разобрался, сделал по аналогии с вашим ДЗ
const cartItem = {
  render(good) {
    return `<div class="good">
                  <div><b>Наименование</b>: ${good.product_name}</div>
                  <div><b>Цена за шт.</b>: ${good.price}</div>
                  <div><b>Количество</b>: ${good.quantity}</div>
                  <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
              </div>`;
  },
};

const cart = {
  cartListBlock: null,
  cartButton: null,
  cartItem,
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
    },
  ],
  init() {
    this.cartListBlock = document.querySelector(".cart-list");
    this.cartButton = document.querySelector(".cart-btn");
    this.cartButton.addEventListener("click", this.clearCart.bind(this));

    this.render();
  },
  render() {
    if (this.goods.length) {
      this.goods.forEach((good) => {
        this.cartListBlock.insertAdjacentHTML(
          "beforeend",
          this.cartItem.render(good)
        );
      });
      this.cartListBlock.insertAdjacentHTML(
        "beforeend",
        `В корзине ${
          this.goods.length
        } позиций(я) стоимостью ${this.getCartPrice()}`
      );
    } else {
      this.cartListBlock.textContent = "Корзина пуста";
    }
  },
  countBasketPrice(cart) {
    return this.goods.reduce(
      (finalPrice, cartItem) => (finalPrice += cartItem.price),
      0
    );
  },
  clearCart() {
    this.goods = [];
    this.render();
  },
};

cart.init();
