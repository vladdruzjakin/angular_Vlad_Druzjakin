import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Morze'
})
export class MorzePipe implements PipeTransform {

  public morse = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
    'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
    'z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '0': '-----', '.': '......',
    ',': '--..--', '?': '..--..', '/': '-..-.', '@': '.--.-.',
    ' ': '.......'
  };
  transform(value: string, args?: any): string {
    let message = '';
    for (let i = 0; i < value.length; i++) {
      message += this.morse[value[i].toLocaleLowerCase()] + ' ';
    }
    return message
  }
}