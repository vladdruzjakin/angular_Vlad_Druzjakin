const {
    assert
} = require('chai');
const {
    fibonacci
} = require('../src/fibo');

test('Test fibo. Input 1. Expected [0]', () => {
    //arrange 
    const input = 1;
    const expectedResult = [0];
    //act
    const actualResult = fibonacci(input);
    //assert
    assert.deepEqual(actualResult, expectedResult);
});
test('Test fibo. Input 2. Expected [0, 1]', () => {
    //arrange 
    const input = 2;
    const expectedResult = [0, 1];
    //act
    const actualResult = fibonacci(input);
    //assert
    assert.deepEqual(actualResult, expectedResult);
});
test('Test fibo. Input 3. Expected [0, 1, 1]', () => {
    //arrange 
    const input = 3;
    const expectedResult = [0, 1, 1];
    //act
    const actualResult = fibonacci(input);
    //assert
    assert.deepEqual(actualResult, expectedResult);
});
test('Test fibo. Input 4. Expected [0, 1, 1,2]', () => {
    //arrange 
    const input = 4;
    const expectedResult = [0, 1, 1, 2];
    //act
    const actualResult = fibonacci(input);
    //assert
    assert.deepEqual(actualResult, expectedResult);
});
test('Test fibo. Input -1. Expected Error', () => {
    //arrange 
    const input = -1;
    //act
    assert.throws(() => {
        fibonacci(input);
    }, 'Invalid num');
});