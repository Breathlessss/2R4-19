console.log("Hello world!");
/*
    Number   числовой тип данных
    2
    -678
    6.98
    Операторы для работы с числами
    Бинарные операторы:
    +
    -
    *
    /
    () - Группировка
    % - Остаток от деления
    ** - Возведение в степень 
    Унарные операторы:
    +
    -

    String - строковый тип данных
    "Это - строка"
    'Это - тоже строка'
    `Это - необычная строка`
    "" - это пустая строка
    " " - это не пустая строка
    О

*/

console.log( 4 ** (1/2) );

let name; /* var | let */
let word = "вата"; // Объявление переменой и задание значения в одном выражении
name = "Vasya"; // завершенное действие - инструкция, она кончается точкой с запятой
word = "каша";

console.log("Это - " + name + "-на " + word);
console.log( `Это - ${name}-на ${word}` );

/*
    Boolean - логический тип данных
    true - 1
    false - 0
    Операторы сравнения
    > - больше
    >= - Больше или равно
    < - меньше
    <= - меньше или равно
    == - сравнение на равенство (сравнение значенийне зависимо от типа данных)
    != - сравнение на неравенство
    === - строгое сравнение (сначала проверить тип данных, а затем значение)
    !== - строгое неравенство
*/
/* Что на дает фраза ДИНАМИЧЕСКИ ТИПИЗИРОВАННЫЙ ЯЗЫК ПРОГРАММИРОВАНИЯ? */
console.log("22" === 22);
//console.log("2" + 2 == 22);