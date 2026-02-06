alert( alert(1) || 2 || alert(3) );

alert( 1 && null && 2 );

alert( alert(1) && alert(2) );

alert( null || 2 && 3 || 4 );

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

alert(undefined ?? NaN ?? null ?? "" ?? " ");

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);

/*
let num1 = 10,
num2 = 20,
result;

if (result === null || result === undefined) {
if (num1 !== null && num1 !== undefined) {
result = num1;
} else {
result = num2;
}
}*/

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;