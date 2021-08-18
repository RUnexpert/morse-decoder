const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let dozens = expr.match(/.{1,10}/g);

    let arr = [];
    for (let elem of dozens) {
     let deuces = elem.match(/.{1,2}/g);
     let result = '';
     for (let item of deuces) {
       if (item == 10) {
         result += '.';
       }
       if (item == 11) {
         result += '-';
       }
       if (item == '**') {
         result += ' ';
       }
       
     }
      arr.push(result);
    }
    
    let transcript = [];
    
    for (let elem of arr) {
         if (elem == '     ') {
          transcript.push(' ');
        }
      for (let key in MORSE_TABLE) {
        if (elem == key) {
          transcript.push(MORSE_TABLE[key]);
        }
      }
    
    }
    let result = transcript.join('');
    return result;
    
}

module.exports = {
    decode
}