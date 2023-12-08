function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* 
Kategorija 1: 0 – 5. skaičius dauginamas iš 3
Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4 */




function categoryOneCalculation(sk) {
    let rez = sk * 3;
    return rez;
}

function categoryTwoCalculation(sk) {
    let rez = (sk - 4) ** 2;
    return rez;
}

function categoryThreeCalculation(sk) {
    let rez = sk + 10;
    return rez;
}

function categoryFourCalculation(sk) {
    let rez = 100 - sk;
    return rez;
}
function categoryFiveCalculation(sk) {
    let rez = sk / 4;
    return rez;
}


let sk = rand(0, 99);
console.log(sk);

if(sk <= 5) {
    console.log(`Skaičius: ${sk}\t Kategorija: 1, \t Rezultatas: ${categoryOneCalculation(sk)}`);
}
else if(sk >= 6 && sk <= 15) {
    console.log(`Skaičius: ${sk}\t Kategorija: 2, \t Rezultatas: ${categoryTwoCalculation(sk)}`);
}
else if(sk >= 16 && sk <= 30 && sk % 5 === 0) {
    console.log(`Skaičius: ${sk}\t Kategorija: 3, \t Rezultatas: ${categoryThreeCalculation(sk)}`);
}
else if(sk >= 31 && sk <= 45 && sk % 2 !== 0) {
    console.log(`Skaičius: ${sk}\t Kategorija: 4, \t Rezultatas: ${categoryFourCalculation(sk)}`);
}
else if(sk >= 46 && sk <= 99 && sk % 10 === 6 || sk  % 10 === 7 ) {
    console.log(`Skaičius: ${sk}\t Kategorija: 5, \t Rezultatas: ${categoryFiveCalculation(sk)}`);
}

document.write("<br>Pirma užduotis:</br>");
let i = "";
for(let i = 0; i < 100; i++) {
    jes = ". *  ";
    if ((i + 1) % 10 === 0) 
    jes += '<br>';
    document.write(jes);
}
document.write('<p>')

