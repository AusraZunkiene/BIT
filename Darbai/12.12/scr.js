if(!localStorage.getItem("people")){
	localStorage.setItem('people', JSON.stringify([]));
}

const possibleNationalities = ["Lithuanian", "Latvian", "German", "British", "Spanish", "Indian", "Japanese"];
const people = JSON.parse(localStorage.getItem("people"));
generateTableContent(people);


if (!localStorage.getItem("currentNumeration"))
	localStorage.setItem("currentNumeration", "1");
let currentNumeration = +localStorage.getItem("currentNumeration");



const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const ageInput = document.getElementById("ageInput");
const nationalityInput = document.getElementById("nationalityInput");
const removeElementInput = document.querySelector("#number");

const addingButtonElement = document.querySelector("#add-button");

const idInputUpdate = document.getElementById("idInputUpdate");
const firstNameInputUpdate = document.getElementById("firstNameInputUpdate");
const lastNameInputUpdate = document.getElementById("lastNameInputUpdate");
const ageInputUpdate = document.getElementById("ageInputUpdate");
const nationalityInputUpdate = document.getElementById("nationalityInputUpdate");

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
	localStorage.setItem("currentNumeration", "" + currentNumeration);


	generateTableContent(people);
	localStorage.setItem("people", JSON.stringify(people));
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
	generateTableContent(people);
	localStorage.setItem('people', JSON.stringify(people));

});

document.querySelector('[value="Update"]').addEventListener('click', (event) => {
	event.preventDefault();
	const foundIndex = people.findIndex(
		(val) => val.number === +idInputUpdate.value);
	if(foundIndex === -1){
		alert('Žmogaus su tokiu numeriu nėra');
		return}
	
	const person = people[foundIndex];
	if (
			!validateName(person.firstName) ||
			!validateName(person.lastName) ||
			!validateAge(person.age) ||
			!isValidNationality(person.nationality)
	) {
			alert("Prašome užpildyti visus laukus");
			return;
	}
	people[foundIndex] = {
			number: person.number,
			firstName: firstNameInputUpdate.value,
			lastName: lastNameInputUpdate.value,
			age: ageInputUpdate.value,
			nationality: nationalityInputUpdate.value,
		};
		generateTableContent(people);
		firstNameInputUpdate.value = "";
		lastNameInputUpdate.value = "";
		ageInputUpdate.value = "";
		nationalityInputUpdate.value = "";
		localStorage.setItem('people', JSON.stringify(people));
	});

	
