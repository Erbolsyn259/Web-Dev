let str = "Привет";

alert( str.toUpperCase() ); // ПРИВЕТ

let num = 1.23456;

alert( num.toFixed(2) ); // 1.23

alert( typeof 0 ); // "число"

alert( typeof new Number(0) ); // "object"!

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей

alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)

// 1 делится на 1 с 3 нулями
1e-3 === 1 / 1000 (=0.001)

// 1.23 делится на 1 с 6 нулями
1.23e-6 === 1.23 / 1000000 (=0.00000123)

alert( 0xff ); // 255
alert( 0xFF ); // 255 (то же самое, регистр не имеет значения)

let a = 0b11111111; // двоичная (бинарная) форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

alert( a == b ); // true, с двух сторон число 255

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

//isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false
// Обратите внимание на разный результат:
alert( Number.isNaN("str") ); // false, так как "str" является строкой, а не числом
alert( isNaN("str") ); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN

//isFinite противоположна NaN
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, потому что специальное значение: NaN
alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity
// Обратите внимание на разный результат:
alert( Number.isFinite("123") ); // false, так как "123" является строкой, а не числом
alert( isFinite("123") ); // true, так как isFinite сначала преобразует строку "123" в число 123

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, без 0x тоже работает

alert( parseInt('2n9c', 36) ); // 123456

alert( Math.random() ); // ... (любое количество псевдослучайных чисел)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024

