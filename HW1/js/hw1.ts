// 1)Определить переменные для всех примитивом джавасткрипта
let num: number = 1,
    str: string = 'string',
    bool: boolean = true,
    obj: object = {},
    arrayNew: number[] = [1, 2, 3, 4, 5, 6],
    array: Array<number> = [1, 2, 3, 4, 5, 6],
    arrCortage: [number, boolean, string] = [1, true, 'str'];

console.log(array)
console.log(arrayNew)

// 2)Написать функцию принимающую число и 
// возвращающую его факториал по всем правилам тайпскрипта

function factorial(num: number): any {
    let fact: number = num;
    if (num < 0){
        return console.log('Неверное число')
    } else {
        for (let i: number = fact - 1; i >= 1; i--) {
            fact *= i;
        };
        return fact
    }
}
console.log(factorial(3))


// 3)Написать функцию принимающую
//  число и возврашающую массив с числами фибоначи до этого порядкового числа

function fibonacci(num: number): number[] {
    let arrFibo: number[] = [0, 1];
    if (num <= 2) {
        return arrFibo.slice(0, num)
    } else {
        for (let i: number = 2; i < num; i++) {
            arrFibo.push(arrFibo[arrFibo.length - 1] + arrFibo[arrFibo.length - 2]);
        }
        return arrFibo
    }

}
console.log(fibonacci(10))
