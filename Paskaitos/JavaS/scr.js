function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 7 užduotis (Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. )
/* Aray sukūrimas vienas būdas: 
let allNumber = new Array(4);

kint[0] = rand(0,2);
kint[1] = rand(0,2);
kint[2] = rand(0,2);
kint[3] = rand(0,2);
kint.push(10);

console.log(allNumber);*/
//Aray sukūrimas kitas būdas: 
let kint = [rand(0, 2), rand(0, 2), rand(0, 2), rand(0, 2)];
 console.log(kint);
 console.log(kint[1]);

let count = new Array(3).fill(0);

    console.log(kint[0], kint[1], kint[2], kint[3]);

if(kint[0] === 0) count[0]++;
else if(kint[0] === 1) count[1]++
else count[2]++;

if(kint[1] === 0) count[0]++;
else if(kint[1] === 1) count[1]++
else count[2]++;

if(kint[2] === 0) count[0]++;
else if(kint[2] === 1) count[1]++
else count[2]++;

if(kint[3] === 0) count[0]++;
else if(kint[3] === 1) count[1]++
else count[2]++;

console.log(`Nulių - ${count[0]}, Vienetų - ${count[1]}, Dvejetų - ${count[0]}`);


const arr = [1, 4, 8, -2, "Petras"];

console.log(arr[0]);

const obj = {
    //JSON - JavaScript object notation
	color: "red",
	name: "Petras",
};

console.log(obj.color);

const person = {
	firstName: "John",
	lastName: "Doe",
	age: 36,
	nationality: "British",
	isMarried: true,
	kids: ["Sara", "Boston"],
};
console.log(person.age);

// Hello, my name is John Doe, my age is 36, I am British and my kids are Sara, Boston
const greetingText = `Hello, my name is ${person.firstName} ${
	person.lastName
}, my age is ${person.age}, I am ${
	person.nationality
} and my kids are ${person.kids.join(", ")}. And I am ${
	person.isMarried ? "Married" : "Not married"
}`;

console.log(greetingText);

//Tuscio objekto sukurimas
const gyvunas = {};
console.log(gyvunas);

gyvunas.animalType = "Liutas";
console.log(gyvunas);

let laukas = "animalType";

//Trys skirtingi budai, kaip galime kreiptis i objekto laukus
console.log(gyvunas[laukas]);
console.log(gyvunas["animalType"]);
console.log(gyvunas.animalType);

gyvunas.occupation = "valdyti";

console.log(gyvunas);

const dog = {};
// breed: "German shepherd",
// name: "Angela",
// age: 7,
// colors: ["brown", "black"],

dog.breed = "German Shepherd";
dog.name = "Angela";
dog.age = 7;
dog.colors = ["brown", "black"];

// dog.zita = "Zita";
// dog.ąžuolas = "Medis";
// dog.dog = "suo";

//Dinaminis savybiu paemimas:
for (let property in dog) {
	console.log(`${property}: ${dog[property]}`);
}

const people = [
	{
		firstName: "Laura",
		lastName: "Gonzales",
		age: 25,
		nationality: "Iraq",
	},
	{
		firstName: "Saulius",
		lastName: "Kreve",
		age: 38,
		nationality: "Lithuanian",
		isMarried: false,
	},
	{
		firstName: "John",
		lastName: "Schmit",
		age: 39,
		nationality: "Canada",
	},
];

// Kreipimasis i objektus masyve
console.log(people[1].firstName, people[1].lastName);

//Objektu pasiemimas is masyvo per cikla
for (let person of people) {
	console.log(person.firstName, person.lastName);
}