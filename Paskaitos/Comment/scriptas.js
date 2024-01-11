//Čia yra komentaras

//kintamojo deklaravimas su let
//number duomenu tipas
let x = 10;

//informacijos išvedimas į konsolę
console.log(x);


//Aritmetiniai operatoriai: + - * /     % (liekanos operatorius)
x = x % 3;

console.log(x);

//kitas būdas kaip aprašyti aritmetinę operaciją
x += 5;

console.log(x);


//boolean duomenu tipo kintamasis
let loginisPatikrinimas = x < 5;

console.log(loginisPatikrinimas);
console.log(typeof loginisPatikrinimas);

// x += "tekstas";
if (loginisPatikrinimas) {
	//typeof tikrina duomenų tipą;
	console.log(typeof x);
	console.log(x);
} else {
	console.log("x yra didesnis nei 5");
}

let tekstas = "labass";

// === sulyginimo operatorius, griežtas tikrinimas, tikrina ir duomenų tipą
if (tekstas === "labas") {
	console.log("tekstas yra labas");
}

// !== operatorius nelygu, griežtas tikrinimas, tikrina ir duomenų tipą
if (tekstas !== "labas") {
	console.log("tekstas nera lygus labas");
}

let skaicius = "5";
// == operatorius netikrinantis duomenu tipo, tačiau tikrinantis reikšmę, taipogi yra ir !=
if (skaicius == 5) {
	console.log("skaicius yra 5");
}

// let tiesa = "gal ir gerai";

if (1) {
	// del šios eilutės iškrenta erroras, kadangi kintamasis tiesa nebuvo atrastas mūsų kode.
	console.log(tiesa);
}



//Stringų sujungimas pasinaudojant sudėties operatoriumi
let eilerastis = "lorem ipsum dolor sit amet";
console.log(eilerastis);

eilerastis += " consectetur";
console.log(eilerastis);




// jei prie skaiciaus yra pridedamas tekstas, galutinis kintamojo tipas yra tekstas
skaicius = 5;
skaicius += "";
console.log(typeof skaicius);



// tekstas yra indeksuojamas, iš jo galime pasiimti raides pagal jų vietą tekste
let kintamasis = "CHICKEN";
//                0123456
console.log(kintamasis[0]);
console.log(kintamasis[1]);
console.log(kintamasis[2]);
console.log(kintamasis[3]);
console.log(kintamasis[4]);
console.log(kintamasis[5]);
console.log(kintamasis[6]);



//Teksto dalyba iš skaičiaus nėra galima, todėl gaunama reikšmė yra NaN. Tokia kintamojo reikšmė signalizuoja apie galimą klaidą kode.
kintamasis /= 10;

//NaN kintamasis yra gaunamas tada, kai gauna loginė klaida atliekant aritmetinę operaciją.
console.log(kintamasis)
console.log(typeof kintamasis)


//kai kintamajam reikšmė nebūna priskiriama, jo reikšmė būna undefined;
let y;
console.log(y);

//Stringo ilgis gaunamas pasinaudojant savybe kintamasis.length
kintamasis = "CHICKEN"
console.log(kintamasis.length);

//komentaras vienos eilutes

/*
Čia yra multiline komentaras
https://www.javatpoint.com/javascript-special-characters
atvirkščias pasvirasis brūkšnys: \ nurodo "escape" simbolį javascript sintaksėje. 
juo pasinaudoję string'e galime įterpti kabutes, tokiose pačiose kabutėse, 
įterpti tabuliacijos simbolį: \t
*/

//  \n - New line symbol

let imoniuSarasas = imone1 + '\n' + imone2;

//Duomenu tipo keitimas

let skaiciausTekstas = '-12.7';

//parseInt(skaiciausTekstas) funkcija, gauna tik sveikuosius skaicius
let skaicius = parseInt(skaiciausTekstas);
console.log(skaicius);

//unary operator:
skaicius = +skaiciausTekstas;
console.log(skaicius);

//Number funkcija:
skaicius = Number(skaiciausTekstas);
console.log(skaicius);//-12.7


//Math

skaicius = 12.7;
//Apvalinimas i artimesne puse
let roundedSkaicius = Math.round(skaicius);
console.log('suapvalinta reiksme: ' + roundedSkaicius);

//Apvalinimas i mazaja puse
roundedSkaicius = Math.floor(skaicius);
console.log('suapvalinta reiksme i mazaja puse: ' + roundedSkaicius);

//Apvalinimas didziaja puse
roundedSkaicius = Math.ceil(skaicius);
console.log('suapvalinta reiksme i didziaja puse: ' + roundedSkaicius);

//Skaiciaus konvertavimas i string duomenu tipa:

//12.7
let valiuta = skaicius.toFixed(2);
console.log(valiuta);
let tekstasSkaicius = skaicius + '';
console.log(typeof tekstasSkaicius + ', jo reiksme: ' + tekstasSkaicius);
tekstasSkaicius = skaicius.toString();
tekstasSkaicius = String(skaicius);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let eilerastis = 'Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys';
//                0123456789...
console.log(eilerastis);

//Teksto paieška pasinaudojant indexOf() metodu. Jei tekstas nerandamas,
// gražinama reikšmė: -1


//ieskoma nuo pradžios
let ozysPosition = eilerastis.indexOf('ožys');
console.log(ozysPosition);

//ieškoma nuo pabaigos
let lastOzysPosition = eilerastis.lastIndexOf('ožys');
console.log(lastOzysPosition);

//Pasinaudojant gauta teksto pozicija, galime gauti žodį ožys su substring() metodu
let ozysText = eilerastis.substring(ozysPosition, ozysPosition + 4);
console.log(ozysText);

let kitasGyvunas = 'avinas';

//Teksto atitikmenu keitimas stringe - visi atitikmenys
let kitasEilerastis = eilerastis.replaceAll('ožys', kitasGyvunas);
console.log(kitasEilerastis);

//Teksto atitikmenu keitimas stringe - pirmas atitikmuo
kitasEilerastis = eilerastis.replace('ožys', 'šuo');
console.log(kitasEilerastis);

//Teksto užrašymas didžiosiomis raidėmis
let eilerastisDidziosiomis = eilerastis.toUpperCase();
console.log(eilerastisDidziosiomis);

//Teksto užrašymas mažosiomis raidėmis;
let eilerastisMazosiomis = eilerastis.toLowerCase();
console.log(eilerastisDidziosiomis);

//teksto dalies gavimas su slice metodu:
//pirmasis parametras - pradžios indeksas, antrasis parametras - galinis subteksto indeksas
let text = "Apple, Banana, Kiwi";
//          01234567890123
let part = text.slice(7, 13);//nuo pozicijos iki pozicijos
console.log(part);

part = text.slice(0, -6);//neigiamas antrasis parametras nupjauna galinius simbolius
console.log(part);

part = text.slice(7);//simboliu pasalinimas nuo pradžios iki .... 
console.log(part);

part = text.slice(-4);
console.log(part);

//let eilerastis = 'Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys';
//teksto paieska stringe:
if(eilerastis.includes('ganytis'))
{
    console.log('kintamajame eilerastis yra zodis: ganytis')
}
else{
    console.log('kintamajame eilerastis tokio zodzio nera')
}



//random skaiciaus sugeneravimas... (2 parametrai: nuo, iki  [inclusive])
let skaiciukas = rand(97, 120);
console.log(skaiciukas);

//sugeneruojama raidė pagal unikodą
console.log(String.fromCharCode(skaiciukas));


//sudarysime programą, kuri atspausdina savaitės dienos pavadinimą, pagal tai,
//kokia kintamojo diena skaičiaus reikšmė. 1 - pirmadienis, 2 -antradienis ir t.t

let diena = 7;
if(diena === 1)
{
    console.log('pirmadienis');
}
else if(diena === 2)
{
    console.log('antradienis');
}
else if(diena === 3)
{
    console.log('treciadienis');
}
else if(diena === 4)
{
    console.log('ketvirtadienis');
}
else if(diena === 5)
{
    console.log('penktadienis');
}
else if(diena === 6)
{
    console.log('sestadienis');
}
else if(diena === 7)
{
    console.log('sekmadienis');
}
else{
    console.log('nera savaites diena');
}

if(diena <= 7 && diena >= 1)
{
    if(diena % 2 === 0)
    {
        console.log('Diena yra lyginė');
    }
    else{
        console.log('Diena yra nelyginė');
    }
}
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// rand(0, 10);

//Užduotis: sukurkite fibonacci skaičių seką susidarančią iš 50 skaičių.

let fibonacci = [0, 1];

// Elemento idejimas i masyvo vieta pagal indeksa
// fibonacci[2] = fibonacci[1] + fibonacci[0];

// Elemento pridejimas prie masyvo galo
// fibonacci.push(fibonacci[1] + fibonacci[0]);

for (let i = 2; i < 50; i++) {
	fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
// console.log(fibonacci);

//masyvo su atsitiktinėmis reikšmėmis generavimas. 10 reikšmių

let atsitiktiniaiSkaiciai = [];

for (let i = 0; i < 1000; i++) {
	let randomSkaicius = rand(0, 10);
	atsitiktiniaiSkaiciai.push(randomSkaicius);
	// atsitiktiniaiSkaiciai[i] = randomSkaicius;
}

console.log(atsitiktiniaiSkaiciai);

//pasinaudodami atsitiktiniu skaiciu masyvu, atspausdinkite
// tik nelygine reikšmę turinčius elementus

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	console.log(
		i +
			1 +
			" asisukimas: atsitiktiniaiSkaiciai[i] = " +
			atsitiktiniaiSkaiciai[i]
	);
	if (atsitiktiniaiSkaiciai[i] % 2 !== 0) {
		console.log(atsitiktiniaiSkaiciai[i]);
	}
}

//Atspausdinkite visas masyvo atsitiktiniaiSkaiciai reikšmes
console.log("------------------------");

console.log(
	"Atsitiktiniu skaiciu masyvo ilgis = " + atsitiktiniaiSkaiciai.length
);
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	console.log(atsitiktiniaiSkaiciai[i]);
}

console.log(atsitiktiniaiSkaiciai);

//Suskaičiuokite, kiek masyve yra elementų su reikšme: 2
// [0,1,8,1,2,4,2,7, 272]

let countOfTwos = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] === 2) countOfTwos++;
}

console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("Skaičių, su reikšme 2 masyve yra: " + countOfTwos);

//Suskaičiuokite, kiek masyve yra elementų su reikšme, mažesne nei 5,
let lessThan5 = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] < 5) lessThan5++;
}
console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("Skaičių, su reikšme <5 masyve yra: " + lessThan5);

//Suskaičiuokite, kiek masyve yra elementų mažesnių nei 3 arba didesnių nei 7

let counter = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] < 3 || atsitiktiniaiSkaiciai[i] > 7) counter++;
}

console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("Skaičių, su reikšme <3 arba >7 masyve yra: " + counter);

let naujasMasyvas = [8, 7, 3, 46, 9, 7];
//Kai norime pridėti elementus prie masyvo:
naujasMasyvas.push(",");

console.log(naujasMasyvas);

//Pašalinimas elemento iš masyvo galo:
naujasMasyvas.pop();
console.log(naujasMasyvas);

// Elemento šalinimas iš priekio:
naujasMasyvas.shift();
console.log(naujasMasyvas);

// Elemento šalinimas pagal indeksą
// masyvoPavadinimas.splice(nuoKur, kiek)

naujasMasyvas.splice(3, 1);
console.log(naujasMasyvas);

// Elemento šalinimas nuo galo
naujasMasyvas.splice(-1);
console.log(naujasMasyvas);

// Prideti nauja elementa i masyvo prieki

naujasMasyvas.unshift(12);
console.log(naujasMasyvas);

// Masyvo elementu atspausdinimas pasinaudojant delimiteriu

console.log(naujasMasyvas.join(", "));
// console.log("<li>" + naujasMasyvas.join("</li><li>") + "</li>");

//Masyvo apsukimas antraip.
naujasMasyvas.reverse();
console.log(naujasMasyvas);

// Užduotis: išfiltruokite iš masyvo visus skaičius, kurie dalinasi iš 2;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] % 2 === 0) {
		atsitiktiniaiSkaiciai.splice(i, 1);
		i--;
	}
}

console.log(atsitiktiniaiSkaiciai.join(", "));