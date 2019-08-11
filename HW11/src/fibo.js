function fibonacci(num) {
    var arrFibo = [0, 1];
    if (num <= 0) {
        throw new RangeError('Invalid num');
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

module.exports = {
    fibonacci
}