// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызова:
// minValue(2, 5);
// minValue(3, -1);
// minValue(1, 1);

// Вариант 1
function minValue(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
const result = minValue(2, 5);
console.log(result);

// Вариант 2
function minValue1(a, b) {
    return Math.min(a, b);
}
const result1 = minValue1(1, 5);
console.log(result1);


// Задача с https://learn.javascript.ru/function-basics#tasks









