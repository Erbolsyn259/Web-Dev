alert( 'I\'m the Walrus!' ); // I'm the Walrus!

let str = `Hello`;
// получаем последний символ
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o


str = 'h' + str[1]; // заменяем строку

alert( str ); // he

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

let str1 = 'Widget with id';

alert( str1.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str1.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

alert( str1.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)


alert( str1.indexOf('id', 2) ) // 12 мы начинаем с позиций 2 

let str2 = "Widget with id";

if (str2.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}

alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

if (~str1.indexOf("Widget")) {
  alert( 'Совпадение есть' ); // работает
}

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

let str3 = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str3.slice(0, 5) ); // порядок важен
alert( str.slice(2) ); // ringify, с позиции 2 и до конца
alert( str.slice(-4, -1) ); // gif

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)

alert( 'a' > 'Z' ); // true

alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z

let str4 = '';

for (let i = 65; i <= 220; i++) {
  str4 += String.fromCodePoint(i);
}
alert( str4 );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ