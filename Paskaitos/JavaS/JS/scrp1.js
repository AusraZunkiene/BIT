function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(sk) {
    let rez = sk ** 2;
    return rez;
}
function categoryTwoCalculation(sk) {
    let rez = sk;
    return rez;
}

function categoryThirdCalculation(sk) {
    let desimtys = +sk.toString()[0]; '2'
    let rez = sk - desimtys;
    return rez;
}

function categoryFourthCalculation(sk) {
    let vienetai = sk % 10;
    let rez = (vienetai + sk) / 2;
    return rez;
}
function categoryFifththCalculation(sk) {
    let a=rand(97,122),
    b=rand(97,122), 
    c=rand(97,122), 
    d=rand(97,122);
let rez = String.fromCharCode(a) + 
    String.fromCharCode(b) + 
    String.fromCharCode(c) + 
    String.fromCharCode(d);
}

let sk = rand(0, 99);

if(sk <= 10) {
    console.log(`Skaičius: ${sk}\t Kategorija: 1, \t Rezultatas: ${categoryOneCalculation(sk)}`);
}
else if(sk < 20) {
    console.log(`Skaičius: ${sk} \t Kategorija: 2, \t Rezultatas: ${categoryTwoCalculation(sk)}`);
}
else if(sk >= 20 && sk < 49 && sk % 2 === 0) {
    console.log(`Skaičius: ${sk}\t Kategorija: 3, \t Rezultatas: ${categoryThirdCalculation(sk)}`);
}
else if(sk >= 20 && sk < 49 && sk % 2 !== 0) {
    console.log(`Skaičius: ${sk}\t Kategorija: 4, \t Rezultatas: ${categoryFourthCalculation(sk)}`);
}
else if(sk >= 50 && sk % 3 === 0) {
    console.log(`Skaičius: ${sk}\t Kategorija: 5, \t Rezultatas: ${categoryFifththCalculation(sk)}`);
}
else {console.log(`Skaičius netinkamas nei vienai kategorijai`);}
