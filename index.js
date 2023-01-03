const morseObj = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
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
  z: "--..",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

const convertToMorseOrToAlphabet = (phrase) => {
  const splittedPhrase =
    (phrase.indexOf(".") || phrase.indexOf("-")) !== -1
      ? phrase.split(" ")
      : phrase.split("");
  let convertedPhrase;

  for (let e of splittedPhrase) {
    for (let key in morseObj) {
      if (e === morseObj[key]) {
        const elementIdx = splittedPhrase.indexOf(e);
        splittedPhrase[elementIdx] = key;

        const whiteSpaceIdx = splittedPhrase.indexOf("");
        splittedPhrase[whiteSpaceIdx] = " ";

        convertedPhrase = splittedPhrase.join("");
      } else if (e === key) {
        const elementIdx = splittedPhrase.indexOf(e);

        splittedPhrase[elementIdx] = morseObj[key];

        convertedPhrase = splittedPhrase.join(" ");
      }
    }
  }

  return convertedPhrase;
};
console.log("First example:", convertToMorseOrToAlphabet("hello world!"));

console.log(
  "Second example:",
  convertToMorseOrToAlphabet(
    ".... . .-.. .-.. ---   .-- --- .-. .-.. -.. -.-.--"
  )
);
