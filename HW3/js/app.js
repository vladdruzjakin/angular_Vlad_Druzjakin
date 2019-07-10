// Домашнее задание: 
var User = /** @class */ (function () {
    function User(name, achivments) {
        this.name = name,
            this.achivments = achivments;
    }
    User.prototype.AddYearOfLife = function (num) {
        return this.age = num;
    };
    User.prototype.AddAchvement = function (achevemnt) {
        return this.achivments += " " + achevemnt;
    };
    return User;
}());
var Achivement = /** @class */ (function () {
    function Achivement(type, heroical, description) {
        this.type = type,
            this.heroical = heroical,
            this.description = description;
    }
    return Achivement;
}());
var SpiderMan = new User('SpiderMan', 'Собрал 100 ракушек'),
    IronMan = new User('IronMan', 'Преодалел высоту в 2000 метров'),
    SpiderManAchive = new Achivement('Бой', 'Боевые снаряды', 'Ваш игрок теперь может использовать снаряды'),
    IronManAchive = new Achivement('Улучшение костюма', 'Дальше больше', 'Ваш костюм может достикать высоты в 2500 метров');