const morseObj = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
}

const convertToMorseOrToAlphabet = (phrase) => {
  const splittedPhrase = phrase.indexOf('.') !== -1 || phrase.indexOf('-') !== -1 ? phrase.split(' ') : phrase.split('')
  let convertedPhrase
  
  for(let e of splittedPhrase){
    for(let prop in morseObj){
      if(e === morseObj[prop]) {
        const idx = splittedPhrase.indexOf(e)
        splittedPhrase[idx] = prop
        const whiteSpace = splittedPhrase.indexOf('')
        splittedPhrase[whiteSpace] = ' '
        convertedPhrase = splittedPhrase.join('')
      } else if(e === prop) {
         const idx = splittedPhrase.indexOf(e)
         splittedPhrase[idx] = morseObj[prop]
        convertedPhrase = splittedPhrase.join(' ')
      }
    }
    
  }
  
  return convertedPhrase
}

console.log('First example:', convertToMorseOrToAlphabet('opa salve'))

console.log('Second example:', convertToMorseOrToAlphabet('--- .--. .-   ... .- .-.. ...- .'))
