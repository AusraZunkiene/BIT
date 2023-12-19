const people = [];
const possibleNationalities = ["Lithuanian", "Latvian", "German", "British", "Spanish", "Indian", "Japanese"];
let currentNumeration = 1;


const arrayFromStorage = JSON.parse(localStorage.getItem("Objektai"));
generateTableContent(arrayFromStorage);


const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const ageInput = document.getElementById("ageInput");
const nationalityInput = document.getElementById("nationalityInput");
const removeElementInput = document.querySelector("#number");

const addingButtonElement = document.querySelector("#add-button");

function validateName(name) {

	let isValid = true;

	if (!name) {
		console.log("!name");
		isValid = false;
	}

	if (/[0-9]/.test(name) || /[!@#$%^&*()?/.,]/.test(name)) {
		console.log("regex");
		isValid = false;
	}
	return isValid;
}
function validateAge(age) {
	let isValid = true;

	if (!age) isValid = false;

	if (isNaN(parseInt(age))) isValid = false;

	if (age < 0 || age > 200) isValid = false;

	if (age % 1 !== 0) isValid = false;

	return isValid;
}
function isValidNationality(nationality) {
	return possibleNationalities.includes(nationality);
}

function nullifyInputValues() {
	firstNameInput.value = "";
	lastNameInput.value = "";
	ageInput.value = "";
	nationalityInput.value = "";
}


addingButtonElement.addEventListener("click", () => {
	
	
	const person = {};


	person.firstName = firstNameInput.value;
	person.lastName = lastNameInput.value;
	person.age = ageInput.value;
	person.nationality = nationalityInput.value;
	person.number = currentNumeration;
	
	nullifyInputValues();

	


	if (
		!validateName(person.firstName) ||
		!validateName(person.lastName) ||
		!validateAge(person.age) ||
		!isValidNationality(person.nationality)
	) {
		alert("Prašome užpildyti visus laukus");
		return;
	}
	

	people.push(person);
	
	currentNumeration++;

	generateTableContent(people);
	localStorage.setItem("Objektai", JSON.stringify(people));
	
});





function generateTableContent(people) {

	
	let dynamicHTML = ``;

	for (let person of people) {
		
		dynamicHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
	}
	
	const tbody = document.querySelector("table tbody");
	
	tbody.innerHTML = dynamicHTML;

}

const removingButtonElement = document.querySelector("#remove-button");

removingButtonElement.addEventListener("click", () => {
	let number = +removeElementInput.value;
	removeElementInput.value = "";

	
	let foundIndex = people.findIndex((person) => person.number === number);

	if (foundIndex === -1) {
		alert("Žmogaus su tokiu numeriu nėra");
		return;
	}

	people.splice(foundIndex, 1);
	console.log(people);
	generateTableContent(people);

});

	
