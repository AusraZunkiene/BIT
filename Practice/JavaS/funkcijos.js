//Tai kas yra funkcijos deklaracijoje - yra parametras

function showMessage(message) {
	console.log(message);
}

// const showMessage = (message) => {
// 	console.log(message);
// };

// const showMessage = function (message) {
// 	console.log(message);
// };

//Tai kas yra iskvietime tarp skliaustu - yra argumentas
console.log(showMessage("Labas pasauli"));

function isABiggerThanB(aValue, bValue) {
	return aValue > bValue;
}
function findBiggerValue(a, b) {
	console.log(isABiggerThanB(a, b));
	if (isABiggerThanB(a, b)) return a;
	else return b;
}

console.log(findBiggerValue(40, 55));

//Spread operatorius:  ...kintamasis
function findMaximumValue(...args) {
	// console.log(args);
	let max = args[0]; //1st elementas
	for (let index in args) {
		if (args[index] > max) max = args[index];
	}
	console.log(max);
}

//spread operatorius
findMaximumValue(4, 7, 8, 100, 100, 150, -3, 200, "tekstas");

// console.log(Math.max(1, 4, 8, -23, 15, "Number"));
// document.querySelector(".pienas").addEventListener("click", () => {
// 	console.log("neliesk!");
// });

function callbackFunction(message, callback) {
	console.log(message);
	callback();
}

callbackFunction("labas pasauli", () => {
	console.log("Funkcijos pabaiga");
});

callbackFunction("labas pasauli", () => {
	console.log("Dar ne pabaiga");
});

function recursion(value) {
	console.log("value: " + value);
	if (value < 10) recursion(value + 1);
	console.log(value);
}

recursion(4);

//Rekursijos panaudojimas
function factorial(n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(4));

// Sukurkite funkciją, kuri apskaičiuoja pažymių vidurkį;

function countAverage(...pazymiai) {
	let sum = 0;
	for (let pazymys of pazymiai) {
		sum += pazymys;
	}
	let average = sum / pazymiai.length;
	return average;
}
console.log(countAverage(4, 7, 9, 10));

//Sukurti funkciją, kuriai paduodamas skaičių masyvas.
//Jei masyve daugiau nei 6 elementai - kiekvieną elementą padalinti iš 2.
// Kitu atveju padauginti visus elementus iš 2.
// Gražinti visų masyve esančių elementų vidurkį.
// tikrinimą daryti išorėje
//1. Tikrinti ar masyve yra daugiau nei 6 elementai
//Jei taip:
//Iskviesti funkcija kuri apskaiciuoja vidurki padalindama
//visus skaicius is 2
//Jei ne:
//Iskviesti funkcija kuri apskaiciuoja vidurki
//padaugindama visus skaicius is 2
//2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas
//3. Apskaiciuoti rezultatinio masyvo elementu reiksmes
//4. Apskaiciuoti rezultatinio masyvo elementu suma;
//5. Apskaiciuoti vidurki padalinant visa elementu suma is elementu kiekio
//6. Grazinti vidurki

const arr = [4, 7, 8, 9, 10, 11, 12];

if (arr.length > 6) {
	// funkcija kuri padalina visus skaicius is 2 ir apskaiciuoja vidurki
	countAverageSpecial(arr, divideAllElementsByTwo);
} else {
	//funkcija, kuri padaugina visus skaicius is 2 ir apskaiciuoja vidurki
	countAverageSpecial(arr, multiplyAllElementsByTwo);
}
function divideAllElementsByTwo(array) {
	for (let index in array) {
		array[index] /= 2;
	}
	return array;
}
function multiplyAllElementsByTwo(array) {
	for (let index in array) {
		array[index] *= 2;
	}
	return array;
}

function countAverageSpecial(array, callback) {
	if (typeof array !== "object") return 0;
	const resultArray = callback(array);
	let sum = 0;
	for (let value of resultArray) {
		sum += value;
	}
	let average = sum / array.length;
	return average;
}
fetch("https://dog.ceo/api/breeds/image/random")
	.then((atsakymas) => atsakymas.json()) //1. gaunamas atsakymas is serverio. Atsakymas konvertuojamas i teksta
	.then((atsakymas) => {
		console.log(atsakymas);
		document.write(`<img src="${atsakymas.message}"/>`);
	}); //2. Iskoduotas atsakymas yra panaudojamas;

fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json())
	.then((atsakymas) => console.log(atsakymas));
//0.3sek

// Error handlinimas
// const skaicius = 5;

// try {
// 	skaicius++;
// } catch (error) {
// 	console.log(error);
// }

// console.log("tesiamas darbas...");

// Pažadas

// fetch(
// 	"https://www.thecocktaildb.com/apsi/json/v1/1/filter.php?c=Ordinary_Drink"
// )
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((error) => console.log(error));

// const pazadas = new Promise((resolve, reject) => {
// 	let isValidUrl = false;
// 	console.log("Prasidejo uzklausa i serveri");
// 	if (isValidUrl)
// 		setTimeout(() => {
// 			resolve("Zinute is serverio");
// 		}, 1000);
// 	else reject(new Error("Neteisingai nurodytas url"));
// 	console.log("Pasibaige uzklausa i serveri");
// })
// 	.then((atsakymas) => console.log(atsakymas))
// 	.catch((klaida) => console.log(klaida));

// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");

function callServerSync() {
	console.log("Uzklausa i serveri prasidejo");
	setTimeout(() => {
		console.log("gauname atsakyma is serverio");
	}, 1000);
	console.log("Užklausa baigta");
}
// callServerSync();

async function callServerAsync() {
	console.log("Uzklausa i serveri prasidejo");
	await new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("gauname atsakyma is serverio");
			resolve();
		}, 1000)
	);
	console.log("Užklausa baigta");
	return "atsakymas1";
}
// fetch()
callServerAsync().then((atsakymas) => console.log(atsakymas));
//
//

function fetchData()
{
    const startTime = new Date()
    fetch(allUrls2[0])
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log("function - " + duration + "ms")
    })
}


async function fetchDataAsync()
{
    const startTime = new Date()
    const request = await fetch(allUrls2[1]);
    const drinks = await request.json()
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log("async - " + duration + "ms");
}
// fetchData()
// fetchDataAsync()


async function fetchAllDataByIngredient(urls)
{
    for(const url of urls)
    {
        const startTime = new Date()
        const promise = await fetch(url);
        const answer = await promise.json();
        console.log(answer)
        const endTime = new Date();
        const duration = endTime.getTime() - startTime.getTime();
        console.log("async - " + duration + "ms");
    }
}

async function fetchAllDataIngredient(urls)
{
    const startTime = new Date()

    const promises = urls.map((url) => 
    fetch(url).then((response) => response.json()));

    const dataFromAllSources = await Promise.all(promises);

    console.log(dataFromAllSources);

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log("async - " + duration + "ms");
}

fetchAllDataByIngredient(allUrls3)
fetchAllDataIngredient(allUrls3)

const array1 = [1, 2, 3, 4];
const array2 = [... array1];

console.log(array2);
array.push(5)
console.log(array)
console.log(array2)

const [pirmas, , trecias] = array
const [, antras, ,ketvirtas] = array

const obj = {
    id: 4,
    name: "Sigis",
    surname: "Sigimonas",
    age: 1942,
    married: false,
};

const {name, surname, married, id} = obj;

console.log(name, surname, married, id)

const arrayForMap = [1, 2, 3, 4, 5, 6]

const mappedArray = arrayForMap.map((value) => value*2)
console.log(mappedArray)

const filteredArray = arrayForMap.filter((value) => value > 3)

console.log(filteredArray);


//SOME:

const isThereAWantedValue = array1.some((value) => value === 8)

console.log(isThereAWantedValue);

