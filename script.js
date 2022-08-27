// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 :Инкремент стоит перед операндом, а увеличивается на 1
//                              //и результатом вычисления будет инкрементированное значение
// d = b++; alert(d);           // 1 : Инкремент стоит после b, операнд увеличивается на один
//                              // но в результат вычисления записывается значение до приминения инкремента
// c = (2+ ++a); alert(c);      // 5 : Значение а было 2, теперь мы увеличиваем еще на 1 и выплняем орецию сложения
// d = (2+ b++); alert(d);      // 4 : b у нас 2, мы прибавляем 2 получаем 4, так как инкремент стоит после операнда
//                              // в результат вычисления записывается значение до приминения инкремента
// alert(a);                    // 3 : мы увеличивали 2 раза на 1
// alert(b);                    // 3 : мы увеличивали 2 раза на 1

//Задание 2
var a = 2;
var x = 1 + (a *= 2); // 5 :  a = 2*2(4) ; x = 1 + 4 = 5.

//Задание 3
let a = 5;
let b = 3;
if (a >= 0 && b >= 0) {
  console.log(a - b);
} else if (a < 0 && b < 0) {
  console.log(a * b);
} else {
  console.log(a + b);
}

//Задание 4
let a = 5;
switch (a) {
  case 1:
    console.log(a++);
  case 2:
    console.log(a++);
  case 3:
    console.log(a++);
  case 4:
    console.log(a++);
  case 5:
    console.log(a++);
  case 6:
    console.log(a++);
  case 7:
    console.log(a++);
  case 8:
    console.log(a++);
  case 9:
    console.log(a++);
  case 10:
    console.log(a++);
  case 11:
    console.log(a++);
  case 12:
    console.log(a++);
  case 13:
    console.log(a++);
  case 14:
    console.log(a++);
  case 15:
    console.log(a++);
}

//Задание 5
function addition(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x + y;
}
//Задание 6
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "сложение":
      return addition(arg1, arg2);
    case "вычитание":
      return subtraction(arg1, arg2);
    case "умножение":
      return multiplication(arg1, arg2);
    case "деление":
      return division(arg1, arg2);
  }
}

//Задание 7
null == 0;
null === 0; //Возвращает false, null - это отсутствие значения, 0 - это число.

//Задание 8
function power(val, pow) {
  if (!pow == 1) {
    return val * power(val, pow - 1);
  }
  return val;
}
