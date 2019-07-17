// Домашнее задание: 
// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero
// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.
var SuperHero;
(function (SuperHero) {
    var Achivement = /** @class */ (function () {
        function Achivement() {
        }
        return Achivement;
    }());
    SuperHero.Achivement = Achivement;
    var User = /** @class */ (function () {
        function User() {
            this.achivments = [];
        }
        User.prototype.AddYearOfLife = function () { };
        User.prototype.AddAchvement = function (achevemnt) {
            this.achivments.push(achevemnt);
        };
        return User;
    }());
    SuperHero.User = User;
})(SuperHero || (SuperHero = {}));
var achivmentOne = {
    type: 'BeGreater',
    heroical: true,
    description: 'First description'
};
var achivmentTwo = {
    type: 'Hero',
    heroical: true,
    description: 'Second description'
};
var SpiderMan = new SuperHero.User();
SpiderMan.name = 'Spider-Man';
SpiderMan.age = 21;
SpiderMan.AddAchvement(achivmentOne);
SpiderMan.AddAchvement(achivmentTwo);
var IronMan = new SuperHero.User();
IronMan.name = 'Iron-Man';
IronMan.age = 34;
IronMan.AddAchvement(achivmentOne);
IronMan.AddAchvement(achivmentTwo);
console.log(SpiderMan);
console.log(IronMan);
