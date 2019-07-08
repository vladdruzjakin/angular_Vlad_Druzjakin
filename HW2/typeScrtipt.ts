interface Converter {
    toSystem(num: number): string,
    fromSystem(str: string): number
}

class ToBinary implements Converter {
    toSystem(num: number): string {
        return num.toString(2)
    }
    fromSystem(str: string): number {
        return parseInt(str, 2)
    }
}
const goToBinary = new ToBinary();
console.log('Dec - Binary:', goToBinary.toSystem(10))
console.log('Binary - Dec:', goToBinary.fromSystem('1010'))

class ToHexal implements Converter {
    toSystem(num: number): string {
        return num.toString(8)
    }
    fromSystem(str: string): number {
        return parseInt(str, 8)
    }
}
const goToHexal = new ToHexal();
console.log('Dec - Hexal:', goToHexal.toSystem(10))
console.log('Hexal - Dec:', goToHexal.fromSystem('12'))


class ToHexidecimal implements Converter {
    toSystem(num: number): string {
        return num.toString(16)
    }
    fromSystem(str: string): number {
        return parseInt(str, 16)
    }
}
const goHexidecimal = new ToHexidecimal();
console.log('Dec - Hexidecimal:', goHexidecimal.toSystem(255))
console.log('Hexidecimal - Dec:', goHexidecimal.fromSystem('ff'))