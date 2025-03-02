const name = "Nitin"
const repocount = 50
// console.log(name + repocount + "value")

// console.log(`Hello my name is ${name} and myrepocount is ${repocount}`);

const gameName = new String("Nitin-Prajapati-dot-com")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // we can't use negative value here
// console.log(newString);

const anotherString = gameName.slice(-14,4)
// console.log(anotherString);

const anotherString_2 = "   Nitin   "
// console.log(anotherString_2);
// console.log(anotherString_2.trim());

let url = "https://nitin.com/nitin%20prajapati"

// console.log(url.replace('%20','_'));

// console.log(url.includes('nitin'));

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ")
console.log(words[4]);
// output : jumps

const char = str.split("")
console.log(char[8]);
// output : k

const strCopy = str.split();
console.log(strCopy);




















