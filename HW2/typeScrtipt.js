var ToBinary = /** @class */ (function () {
    function ToBinary() {
    }
    ToBinary.prototype.toSystem = function (num) {
        return num.toString(2);
    };
    ToBinary.prototype.fromSystem = function (str) {
        return parseInt(str, 2);
    };
    return ToBinary;
}());
var goToBinary = new ToBinary();
console.log('Dec - Binary:', goToBinary.toSystem(10));
console.log('Binary - Dec:', goToBinary.fromSystem('1010'));
var ToHexal = /** @class */ (function () {
    function ToHexal() {
    }
    ToHexal.prototype.toSystem = function (num) {
        return num.toString(8);
    };
    ToHexal.prototype.fromSystem = function (str) {
        return parseInt(str, 8);
    };
    return ToHexal;
}());
var goToHexal = new ToHexal();
console.log('Dec - Hexal:', goToHexal.toSystem(10));
console.log('Hexal - Dec:', goToHexal.fromSystem('12'));
var ToHexidecimal = /** @class */ (function () {
    function ToHexidecimal() {
    }
    ToHexidecimal.prototype.toSystem = function (num) {
        return num.toString(16);
    };
    ToHexidecimal.prototype.fromSystem = function (str) {
        return parseInt(str, 16);
    };
    return ToHexidecimal;
}());
var goHexidecimal = new ToHexidecimal();
console.log('Dec - Hexidecimal:', goHexidecimal.toSystem(255));
console.log('Hexidecimal - Dec:', goHexidecimal.fromSystem('ff'));
