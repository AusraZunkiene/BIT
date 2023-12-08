function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArrayOfRandomNumber(min, max, length = 10)
{
    let arr = [];
    for (let i = 0; i < length; i++){
        arr.push(rand(min, max));
    }
    return arr;
}
const arr = generateArrayOfRandomNumber(0, 10, 100);
console.log(arr);
const masyvas = [6, 2, 9, 5, 12];

// filter - gražina tuos elementus kurie praeina testą.
const filterArray = masyvas.filter((num) => num > 7);

// gražins [9, 12] nes tik jie didesni už 7
console.log(filterArray);

// map - pakeist elemento value taip kaip jūs norit.
const mapArray = masyvas.map((num) => num * 2);

// Gražins [12, 4, 18, 10, 24] nes perėjom per visus elementus ir padauginom iš 2
console.log(mapArray);

// reduce - sudės arba atims visus elementus vienas iš kito. Galim padaryt kad dalintusi ar daugintusi iš bendro varijanto bet bent aš tam tuo nenaudoju.
const reduceArray = masyvas.reduce((tot, num) => num + tot);

// Gražins 34 nes visus skaičius [6, 2, 9, 5, 12] sudėjus bus 34
console.log(reduceArray);

// Some - tikrins ar bent kažkuris elementas praėjo testą.
const someArray = masyvas.some((num) => num < 6);

// Gražins true kadangi 2 elementai praėjo testą. Nes 2 skaičiai yra mažesni už 6 (2, 5)
console.log(someArray);

// every = tikrins ar visi elementai praėjo testą.
const everyArray = masyvas.every((num) => num < 12);

// Gražins false kadangi vienas elementas (12) nėra mažesnis už 12 ir jis testo nepraeina.
console.log(everyArray);

// find - Gražins primą elementą kuris praėjo testą.
const findArray = masyvas.find((num) => num > 8);

// Gražins 9 nes jis yra pirmas elementas kuris yra didesnis už 8.
console.log(findArray);

// findIndex - Gražins pirmo elemento indeksą masyve kuris praeis testą.
const findIndexArray = masyvas.findIndex((num) => num > 8);

// Gražins 2 nes 9 yra 3 elementas masyve (antras indexas nes pradedama skaičiuoti nuo 0)
console.log(findIndexArray);

// Sort - išdėstys masyvo eiliškumą pagal tai kaip norit.
const sortArray = masyvas.sort((a, b) => a - b);

// Gražins nuo mažiausio iki didžiausio. Bet galim apkeist į b - a ir gražins nuo didžiausio iki mažiausio. P.S updeitins originalu masyvą.
console.log(sortArray);
console.log(masyvas);
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateArrayOfRandomNumbers(min = 10, max, length = 10) {
	//sugeneruoti masyva
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(rand(min, max));
	}
	return arr;
}

const generateArrayOfRandomNumbers2 = (min = 10, max, length = 10) => {
	let arr = [];
	for (let i = 0; i < length; i++) arr.push(rand(min, max));
	return arr;
};

//masyvams, funkcijoms, objektams
//Nekintamumas, geroji praktika, optimizavimas - tam tikru sistemu.
const arr = generateArrayOfRandomNumbers2(1, 99, 20);

let arr2 = arr;
console.log(arr);
console.log(arr2);
arr2.push(1);
console.log(arr);
console.log(arr2);

//Masyvas su const
const arr3 = [];

arr3.push(10);
arr3.push(1);
arr3.push(9);
console.log(arr3);
arr3.splice(-1);
console.log(arr3);

//Apskaičiuoti visų skaičių vidurkį šiame masyve;
const arr4 = generateArrayOfRandomNumbers2(1, 1000, 20);
console.log(arr4);

let sum = 0;
//Senoji darbo su masyvais sintakse
for (let i = 0; i < arr4.length; i++) {
	sum += arr4[i];
	// console.log(`${i + 1}. suma: ${sum}`);
}

let average = sum / arr4.length;
console.log(average);

const arr5 = generateArrayOfRandomNumbers2(1, 1000, 23);
console.log(arr5);
sum = 0;

// For of ciklas - skirtas atlikti operacijas su visais masyvo, objekto elementais:
//grazina einamojo masyvo elemento reikšmę
for (let value of arr5) sum += value;

average = sum / arr5.length;
console.log(average);

const arr6 = generateArrayOfRandomNumbers2(1, 1000, 30);
sum = 0;
console.log(arr6);

//For in ciklas - For of ciklas - skirtas atlikti operacijas su visais masyvo, objekto elementais:
//gražina einamojo masyvo elemento indekso reikšmę;
for (let index in arr6) {
	sum += arr6[index];
}

average = sum / arr6.length;
console.log(average);

console.log("-------------1-------------");
for (let x of arr6) {
	console.log(x);
}

console.log("-------------2-------------");
for (let x in arr6) {
	//in - index
	// console.log(x);
}

//atvirkštinis ciklas
for (let i = 70; i >= 0; i--) {
	// console.log(i);
}

//Filtruojame vardus pagal vardo ilgi
const masyvas = ["Petras", "Ona", "Justinas", "Lina"];

//paprastas funkcijos panaujimas kaip parametro.
let filteredValues = masyvas.filter(function (value, index) {
	console.log(`indeksas: ${index}, reikšmė: ${value}`);
	return value.length > 4;
});

filteredValues = masyvas.filter((val) => val.length === 4);

console.log(filteredValues);
//masyvas po filtracijos lieka toks pat
console.log(masyvas);

//MAP atlieka operacijas su visais masyvo elementais
let masyvas2 = [6, 2, 9, 5, 12];
console.log(masyvas2);

let modifikuotasMasyvas = masyvas2.map((value) => {
	if (value > 5) {
		return value + 5;
	} else {
		return value;
	}
});

console.log(modifikuotasMasyvas);

//Reduce - gražina rezultata operacijos su visais elementais
console.log(masyvas2);

//vidurkio apskaičiavimas pasinaudojant reduce
let suma = masyvas2.reduce((total, value) => total + value);
console.log(suma / masyvas2.length);

//some
//tikrinimas ar bent vienas iš masyvo elementų praeina patikrinimą
let isThereNumberLargerThan12 = masyvas2.some((value) => value > 9);
console.log(isThereNumberLargerThan12);

//every
//tikrina ar visi elementai iš masyvo praeina patikrinimą
let isEveryNumberLargerThan1 = masyvas2.every((value) => value > 2);
console.log(isEveryNumberLargerThan1);

let masyvas3 = generateArrayOfRandomNumbers(-100, 100, 100);
console.log(masyvas3);
masyvas3.sort((a, b) => {
	return b - a;
	//jei grazinama reiksme:
	// > 0	sort a after b, e.g. [b, a]
	// < 0	sort a before b, e.g. [a, b]
	// === 0	keep original order of a and b
});

console.log(masyvas3);
