const cocktailNameFilterElement = document.querySelector('#coctailNameFilter'),
	categorySelectElement = document.querySelector('#categorySelect'),
	glassSelectElement = document.querySelector('#glassTypeSelect'),
	ingredientSelectElement = document.querySelector('#ingredientSelect'),
	luckyButtonElement = document.querySelector('#lucky'),
	buttonSearch = document.querySelector('#search'),
	drinksElement = document.querySelector(".drinks");

/*fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => selectCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
.then((response) => selectGlassCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => selectIngredientCategory(response));


function selectCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${(value.map(value.strCategory))}</option>`
    }
        categorySelectElement.innerHTML = dynamicHTML 
}

function selectGlassCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${JSON.stringify(value.strGlass)}</option>`
    }
    glassSelectElement.innerHTML = dynamicHTML
}

function selectIngredientCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${JSON.stringify(value.strIngredient1)}</option>`
    }
    ingredientSelectElement.innerHTML = dynamicHTML
   //Lieka kabutės, reikia nuimti 
}*/


//Tris funkcijas sudedam į vieną, užpildom selectus.
function fillSelects(fields, selectElement, strFieldName) {
	let dynamicHTML = "";
	for (const value of fields) {
		dynamicHTML += `<option>${value[strFieldName]}</option>`;
		}
	selectElement.innerHTML += dynamicHTML;
}

//Automatinis gavimas.
const selectValues = [];

async function fillSelectsElements() {
	const allUrls = [
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
	];

	const allPromises = allUrls.map((url) => fetch(url).then((response) => response.json()));
	const allValues = await Promise.all(allPromises);
	const [allCategories, allGlasses, allIngredients] = allValues;

	selectValues.categories = allCategories.drinks.map((categoryObj)=> categoryObj.strCategory);
	selectValues.glasses = allGlasses.drinks.map((glass)=> glass.strGlass);
	selectValues.ingredients = allIngredients.drinks.map((ingredient)=> ingredient.strIngredient1);

	fillSelects(allCategories.drinks, categorySelectElement, "strCategory");
	fillSelects(allGlasses.drinks, glassSelectElement, "strGlass");
	fillSelects(allIngredients.drinks, ingredientSelectElement, "strIngredient1");

}

/* Pakeitėm į automatinį gavimą.
async function fillSelectsElements() {
	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
	.then((response) => response.json())
	.then((response) => {fillSelects(response.drinks, categorySelectElement, "strCategory");
		categoryArray.push(...response.drinks.map((value) => value.strCategory));})

	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
	.then((response) => response.json())
	.then((response) => fillSelects(response.drinks, glassSelectElement, "strGlass"));

	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
	.then((response) => response.json())
	.then((response) => fillSelects(response.drinks, ingredientSelectElement, "strIngredient1"));
}
*/

const drinksArray = [];

async function getAllDrinks(){
	const categoryDrinksUrls = [];
	for(const category of selectValues.categories) {
		let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`;
		categoryDrinksUrls.push(dynamicUrl);
	}
	const allPromises = categoryDrinksUrls.map((url) => fetch(url).then((response) => response.json()));
	const allValues = await Promise.all(allPromises);
	allValues.forEach((value)=>drinksArray.push(...value.drinks));
} 

/*Pasidarome keitimą funkcijos 
async function getAllDrinks() {
	for(const category of selectValues.categories) {
		let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`;
	const response = await fetch(dynamicUrl);
	const answerFromServer = await response.json();
	for (const drink of answerFromServer.drinks) drinksArray.push(drink);
	}
}
*/

function generateDrinksHTML(drinks) {
	let dynamicHTML = "";

	for (let drink of drinks) {
		dynamicHTML += `<div class="drink">
		<img src="${drink.strDrinkThumb}" alt=""/>
		<h2 class="drink-title">${drink.strDrink}</h2>
		</div>`;
	}
	drinksElement.innerHTML = dynamicHTML;
}

async function filter() {
	const searchvalue = cocktailNameFilterElement.value; 
		category = categorySelectElement.value, 
		glass = glassSelectElement.value,
		ingredient = ingredientSelectElement.value;
	let filterArray = [...drinksArray];
	if (searchvalue) {
		filterArray = filterArray.filter((drinkObj)=>
		drinkObj.strDrink.toLowerCase().includes(searchvalue.toLowerCase()));
	}
	if (category !== "Pasirinkite kategoriją"){
		const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`);
		const drinksOfCategory = await promise.json();
		filterArray = filterArray.filter((drink)=> drinksOfCategory.drinks.some((drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink));
	}
	if (glass !== "Pasirinkite stiklinės tipą") {
		const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ", "_")}`);
		const drinksOfGlass = await promise.json();
		filterArray = filterArray.filter((drink) => drinksOfGlass.drinks.some((drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink));
	}
	if (ingredient !== "Pasirinkite ingredientą") {
		const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(" ", "_")}`);
		const drinksOfIngredient = await promise.json();
		filterArray = filterArray.filter((drink) => drinksOfIngredient.drinks.some((drinksOfIngredient) => drink.idDrink === drinksOfIngredient.idDrink));
	}
	generateDrinksHTML(filterArray);
};

async function initialization() {
	await fillSelectsElements();
	await getAllDrinks();
	generateDrinksHTML(drinksArray); 
	buttonSearch.addEventListener("click", filter);
}
initialization();


async function luckyButton() {
	const promise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
	const response = await promise.json();
	const drink = response.drinks[0];
	let dynamicIngr= "";
	document.querySelector(".pav").innerText = drink.strDrink;
	document.querySelector("#modal-glass").innerText = drink.strGlass;
	document.querySelector(".modal-img").src = drink.strDrinkThumb;
	document.querySelector("#modal-category").innerText = drink.strCategory;
	document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;
	document.querySelector("#modal-recipe").innerText = drink.strInstructions;
	document.querySelector("#modal-ingredient").innerText = drink.strIngredient1 +":";
	document.querySelector("#modal-ingredient1").innerText = drink.strMeasure1;
	if(drink.strIngredient2 && drink.strMeasure2){	
		document.querySelector("#modal1-ingredient").innerText = drink.strIngredient2 +":";
		document.querySelector("#modal1-ingredient1").innerText = drink.strMeasure2;}
	if(drink.strIngredient3 && drink.strMeasure3){		
		document.querySelector("#modal3-ingredient").innerText = drink.strIngredient3 +":";
		document.querySelector("#modal3-ingredient1").innerText = drink.strMeasure3;}
	if(drink.strIngredient4 && drink.strMeasure4){		
		document.querySelector("#modal4-ingredient").innerText = drink.strIngredient4 +":";
		document.querySelector("#modal4-ingredient1").innerText = drink.strMeasure4;}
	if(drink.strIngredient5 && drink.strMeasure5){		
		document.querySelector("#modal5-ingredient").innerText = drink.strIngredient5 +":";
		document.querySelector("#modal5-ingredient1").innerText = drink.strMeasure5;}
	if(drink.strIngredient6 && drink.strMeasure6){		
		document.querySelector("#modal6-ingredient").innerText = drink.strIngredient6 +":";
		document.querySelector("#modal6-ingredient1").innerText = drink.strMeasure6;}
	if(drink.strIngredient7 && drink.strMeasure7){		
		document.querySelector("#modal7-ingredient").innerText = drink.strIngredient7 +":";
		document.querySelector("#modal7-ingredient1").innerText = drink.strMeasure7;}
	if(drink.strIngredient8 && drink.strMeasure8){		
		document.querySelector("#modal8-ingredient").innerText = drink.strIngredient8 +":";
		document.querySelector("#modal8-ingredient1").innerText = drink.strMeasure8;}
	dialog.showModal(drink);
}

luckyButtonElement.addEventListener('click', luckyButton);



const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".drinks");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
 
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


 