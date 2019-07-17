// Домашнее задание: 

// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero

// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.
namespace SuperHero {
    export interface AchivementInterface {
        type: string,
        heroical: boolean,
        description: string
    }
    export class Achivement implements AchivementInterface {
        description: string;
        heroical: boolean;
        type: string;

    }
    export interface UserInterface {
        name: string,
        age: number,
        achivments: AchivementInterface[],
        AddYearOfLife(): void,
        AddAchvement(achevemnt: AchivementInterface): void
    }
    export class User implements UserInterface {
        public name: string;
        public age: number;
        public achivments: AchivementInterface[] = [];

        AddYearOfLife(): void { }
        AddAchvement(achevemnt: AchivementInterface): void {
            this.achivments.push(achevemnt);
        }
    }
}

const achivmentOne: SuperHero.Achivement = {
    type: 'BeGreater',
    heroical: true,
    description: 'First description'
};
const achivmentTwo: SuperHero.Achivement = {
    type: 'Hero',
    heroical: true,
    description: 'Second description'
};

const SpiderMan = new SuperHero.User();
SpiderMan.name = 'Spider-Man';
SpiderMan.age = 21;
SpiderMan.AddAchvement(achivmentOne);
SpiderMan.AddAchvement(achivmentTwo);


const IronMan = new SuperHero.User();
IronMan.name = 'Iron-Man';
IronMan.age = 34;
IronMan.AddAchvement(achivmentOne);
IronMan.AddAchvement(achivmentTwo);

console.log(SpiderMan);
console.log(IronMan); 