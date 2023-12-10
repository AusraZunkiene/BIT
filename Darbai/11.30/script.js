
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("1 užduotis");
/* 1. Sąlyga: Generuojamas skaičius tarp 0 ir 99;

Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log();

Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

Rezultatas:
Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
PVZ. sugeneruotas skaičius 28:
Skaičius - 28, Kategorija 3, operacijos rezultatas: 26 */

let sk1 = rand(0, 99);
//Kategorija 1: 0 <= skaičius <= 10 - pakelti skaičių kvadratu ir atspausdinti
//galima kitu būdu: function category...
console.log(sk1);

if(sk1 <= 10)
{let rez = sk1**2; //čia reiktų = categoryOne Calculation(sk);arba šitą nutrint ir kelet consolėn prie Rezultatas: category...
    console.log(`Skaičius: ${sk1}\t Kategorija: 1, \t Rezultatas: ${rez}`);
}

//Kategorija 2: 10 < skaičius < 20 - atspausdinti skaičių tokį koks jis yra;

else if(sk1 < 20) {
    let rez = sk1;
    console.log(`Skaičius: ${sk1} \t Kategorija: 2, \t Rezultatas: ${rez}`);
}
//Kategorija 3: 20 <= skaičius < 50  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti

else if(sk1 >= 20 && sk1 < 49 && sk1 % 2 === 0) {
    let desimtys = +sk1.toString()[0]; '2'
    let rez = sk1 - desimtys;
    console.log(`Skaičius: ${sk1}\t Kategorija: 3, \t Rezultatas: ${rez}`);
}
//Kategorija 4: 20 <= skaičius < 50  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;

else if(sk1 >= 20 && sk1 < 49 && sk1 % 2 !== 0) {
    let vienetai = sk1 % 10;
    let rez = (vienetai + sk1) / 2;
    console.log(`Skaičius: ${sk1}\t Kategorija: 4, \t Rezultatas: ${rez}`);
}
//Kategorija 5: 50 <= skaičius ir skaičius dalinasi iš 3 be liekanos:
//Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite

else if(sk1 >= 50 && sk1 % 3 === 0) {
    let a=rand(97,122),
        b=rand(97,122), 
        c=rand(97,122), 
        d=rand(97,122);
    let rez = String.fromCharCode(a) + 
        String.fromCharCode(b) + 
        String.fromCharCode(c) + 
        String.fromCharCode(d);
    console.log(`Skaičius: ${sk1}\t Kategorija: 5, \t Rezultatas: ${rez}`);
}
//Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

else {console.log(`Skaičius netinkamas nei vienai kategorijai`);}

console.log("2 užduotis");
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
console.log("3 užduotis");
//Atstumas tarp automobilių lygus s0 km. Jie vienu metu pradeda važiuoti. Antrasis automobilis vejasi pirmąjį. Automobilių greičiai  v1 ir v2 km/h - sveikieji skaičiai. Parašykite programą, kuri apskaičiuotų atstumą s tarp automobilių po t valandų ir apibūdintų situaciją (niekada nepavys, aplenkė, pavys, pasivijo).
//Pvz.: s0 = 200, v1 = 80, v2 = 50, t = 2, s = 260 km. Niekada nepavys;
//s0 = 20, v1 = 70, v2 = 80, t = 3, s = 10 km. Aplenkė.

let
    v1 = 110; 
    v2 = 100; 
    t = 3;  

let s = (v1 - v2) * t;
console.log(s)
if (s === 0) {
    console.log("Automobiliai susigretins");
} else if (0 < s) {
    console.log("Antrasis automobilis niekada nepavys pirmojo");
} else {
    console.log("Antrasis automobilis aplenks pirmąjį");
}
console.log(`Atstumas tarp automobilių po ${t} valandų yra: ${s} km.<br>`);

console.log("4 užduotis");
//Skaičiai t1, t2, t3 reiškia vidutinę trijų iš eilės einančių dienų temperatūrą. Kelias dienas temperatūra buvo neigiama, o kelias - teigiama? Rezultatą išspausdinkite žodžiais. Šiuo atveju 0 skaitome, kaip teigiamą temperatūrą.
//Pvz.: t1 = 2, t2 = -5, t3 = 8, Rezultatas: Dvi dienas teigiama, vieną - neigiama.

let t1 = 3;
    t2 = 5;
    t3 = -5;
let teigiama = 0;
let neigiama = 0;
if (t1 >= 0) teigiama++;
else neigiama++;
if (t2 >= 0) teigiama++;
else neigiama++;
if (t3 >= 0) teigiama++;
else neigiama++;

    console.log(`Rezultatas: ${teigiama} dienas teigiama, ${neigiama}- neigiama.`);