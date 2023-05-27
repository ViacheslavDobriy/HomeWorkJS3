// ЗАДАНИЕ 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubeOfNumber = number => { return number ** 3 };

console.log(`${cubeOfNumber(2) + cubeOfNumber(3)}`);

// ЗАДАНИЕ 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа
// и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const userNumber = prompt('Введите число: ');

const checkedNumber = value => !!Number(value);  // Функция проверки строки на число

/* Функция вычисления заработной платы после вычета 13% налога */
const profit = value1 => {
    const result = value1 * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен: ${result}`);
}

if (checkedNumber(userNumber)) {
    profit(userNumber);
} else {
    console.log('Значение задано неверно!');
}

// ЗАДАНИЕ 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

const userNumber1 = Number(prompt('Введите первое число'));
const userNumber2 = Number(prompt('Введите второе число'));
const userNumber3 = Number(prompt('Введите третье число'));

/**
 * Функция заполнения массива введенными числами
 * @param {*} value1 первое значение
 * @param {*} value2 второе значение
 * @param {*} value3 третье значение
 * @returns массив
 */
const fillUpArray = (value1, value2, value3) => {
    let arrayOfNumbers = [];
    arrayOfNumbers.push(value1);
    arrayOfNumbers.push(value2);
    arrayOfNumbers.push(value3);
    return arrayOfNumbers;
}

/**
 * Функция вычисления максимального значения среди элементов массива
 * @param {*} array заполненный массив
 * @returns функция возвращает максимальное значение массива
 */
const maxNumberIs = array => {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        if (max < array[index]) {
            max = array[index];
        }
    }
    return max;
}

console.log(`Максимальное число из введенных трех: ${maxNumberIs(fillUpArray(userNumber1, userNumber2, userNumber3))}`);

// ЗАДАНИЕ 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций
// (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например
// выражение console.log(sum(2, 6)); должно вывести число 8 в консоль
// (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (value1, value2) => {return value1 + value2};
const differ = (value1, value2) => {
    if(value1 > value2) {
        return value1 - value2 
    } else if(value1 < value2) {
        return value2 - value1;
    } else return 0;
}
const multiply = (value1, value2) => {return value1 * value2};
const division = (value1, value2) => {return value1 / value2};

console.log(sum(34, 22));
console.log(differ(34, 60));
console.log(multiply(34, 22));
console.log(division(34, 22));