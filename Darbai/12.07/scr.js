function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log('1 užduotis');
function generateRandomLetter() {
    const letters = "ABCD";
  
    return letters[Math.floor(Math.random() * letters.length)];
  }
console.log(generateRandomLetter());

let allLetter = [];
let ALetter = 0;
let BLetter = 0;
let CLetter = 0;
let DLetter = 0;
for (let i = 0; i < 200; i++){
    allLetter.push(generateRandomLetter());
    if (allLetter[i] === 'A') ALetter++;
    else if (allLetter[i] === 'B') BLetter++;
    else if (allLetter[i] === 'C') CLetter++;
    else  DLetter++;
}
console.log(allLetter);


console.log(`A raidžių: ${ALetter}`);
console.log(`B raidžių: ${BLetter}`);
console.log(`C raidžių: ${CLetter}`);
console.log(`C raidžių: ${DLetter}`);
console.log('2 užduotis');
//Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
console.log(allLetter.sort());
console.log('3 užduotis');
const first = [];
const second = [];
const third = [];
for (let i = 0; i < 200; i++){
    first.push(generateRandomLetter());}
console.log(first);
for (let i = 0; i < 200; i++){
    second.push(generateRandomLetter());}
console.log(second);
for (let i = 0; i < 200; i++){
    third.push(generateRandomLetter());}
console.log(third);

let IndexSum = [];

for (let i = 0; i < 200; i++) {
    IndexSum.push(first[i] + second[i] + third[i]);
}
console.log(IndexSum);
let uniq = [];
for (let index of IndexSum) {
    if(!uniq.includes(value)){
        uniq.push(value);
    }
}

console.log(`Unikalių reikšmių: ${uniq}`);
//Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log('4 užduotis');
let masyvasOne = [];
let masyvasTwo =[];
for (let i = 0; i < 100; i++) {
    let randomSkaicius = rand(100, 999);
    masyvasOne.push(randomSkaicius);
    if (randomSkaicius[i] !== randomSkaicius[i+1]){
        masyvasOne.push(randomSkaicius);
    }
}
    console.log(masyvasOne);
for (let i = 0; i < 100; i++) {
    let randomSkaicius = rand(100, 999);
    masyvasTwo.push(randomSkaicius);
    if (randomSkaicius[i] !== randomSkaicius[i+1]){
        masyvasTwo.push(randomSkaicius);
    }}
    console.log(masyvasTwo);
//Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

console.log('5 užduotis');

let masyvasFive = [];
for (let i = 0; i < 100; i++)
{
    if(first[i] !== second[i]) masyvasFive.push(first[i]);
}
console.log(masyvasFive);

//Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
console.log('6 užduotis');
let masyvasSix = [];
for (let value of)

console.log(masyvasSix);

//Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
console.log('7 užduotis');
let paskutinisMasyvas = [];
paskutinisMasyvas = masyvasOne.map((value, index) =>
{
    for (i = 0; i < 100; i++){
    value = masyvasTwo[i];
    index = masyvasOne[i];}
    return {value, index};
})

console.log(paskutinisMasyvas);

