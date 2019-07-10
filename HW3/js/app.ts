// Домашнее задание: 

// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero

// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.

interface UserInstans {
    name: string,
    age: number,
    achivments: string,
    AddYearOfLife(num: number): number,
    AddAchvement(achevemnt): string
}

interface AchivementInstans {
    type: string,
    heroical: string,
    description: string
}

class User implements UserInstans {
    public name: string;
    public age: number;
    public achivments: string;
    constructor(name: string, achivments: string) {
        this.name = name,
            this.achivments = achivments
    }

    AddYearOfLife(num: number): number {
        return this.age = num;
    }
    AddAchvement(achevemnt: any): string {
        return this.achivments += ` ${achevemnt}`
    }
}

class Achivement implements AchivementInstans {
    public type: string;
    public heroical: string;
    public description: string;

    constructor(type: string, heroical: string, description: string) {
        this.type = type,
            this.heroical = heroical,
            this.description = description
    }
}

const SpiderMan = new User('SpiderMan', 'Собрал 100 ракушек'),
    IronMan = new User('IronMan', 'Преодалел высоту в 2000 метров'),
    SpiderManAchive = new Achivement('Бой', 'Боевые снаряды', 'Ваш игрок теперь может использовать снаряды'),
    IronManAchive = new Achivement('Улучшение костюма', 'Дальше больше', 'Ваш костюм может достикать высоты в 2500 метров');
