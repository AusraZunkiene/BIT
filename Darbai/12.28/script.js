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
//pasidaryt kaip per paskaita
async function getAllDrinks() {
	for(const category of selectValues.categories) {
		let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ","_")}`;
	const response = await fetch(dynamicUrl);
	const answerFromServer = await response.json();
	for (const drink of answerFromServer.drinks) drinksArray.push(drink);
	}
}

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
		//category = categorySelectElement.value, 
		//glass = glassSelectElement.value,
		//ingredient = ingredientSelectElement.value;
	let filterArray = [...drinksArray];
	if(searchvalue) {
		filterArray = filterArray.filter((drinkObj)=>
		drinkObj.strDrink.toLowerCase().includes(searchvalue.toLowerCase()));
	}
	generateDrinksHTML(filterArray);
}

async function initialization() {
	await fillSelectsElements();
	await getAllDrinks();
	buttonSearch.addEventListener("click", filter);
	generateDrinksHTML(drinksArray); 
}
initialization();


async function luckyButton() {
	const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
	const answerFromServer = await response.json();
	dialog.showModal(answerFromServer.drinks);
}

luckyButtonElement.addEventListener('click', luckyButton)



const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".drinks");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


 