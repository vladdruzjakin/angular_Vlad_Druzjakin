// 1)Определить переменные для всех примитивом джавасткрипта
var num = 1,
    str = 'string',
    bool = true,
    obj = {},
    arrayNew = [1, 2, 3, 4, 5, 6],
    array = [1, 2, 3, 4, 5, 6],
    arrCortage = [1, true, 'str'];
console.log(array);
console.log(arrayNew);
// 2)Написать функцию принимающую число и 
// возвращающую его факториал по всем правилам тайпскрипта
function factorial(num) {
    var fact = num;
    if (num <= 0) {
        return fact = 1;
    } else {
        for (var i = fact - 1; i >= 1; i--) {
            fact *= i;
        };
        return fact;
    }
}


console.log(factorial(0));
// 3)Написать функцию принимающую
//  число и возврашающую массив с числами фибоначи до этого порядкового числа
function fibonacci(num) {
    var arrFibo = [0, 1];
    if (num <= 0) {
        return "Введено неверное число";
    } else {
        if (num <= 2) {
            return arrFibo.slice(0, num);
        } else {
            for (var i = 2; i < num; i++) {
                arrFibo.push(arrFibo[arrFibo.length - 1] + arrFibo[arrFibo.length - 2]);
            }
            return arrFibo;
        }
    }
}
console.log(fibonacci(-1));