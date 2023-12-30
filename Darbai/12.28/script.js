const cocktailNameFilterElement = document.querySelector('#coctail-name-filter'),
categorySelectElement = document.querySelector('#category-select'),
glassSelectElement = document.querySelector('#glass-type-select'),
ingredientSelectElement = document.querySelector('#ingrediant-select'),
luckyButtonElement = document.querySelector('#im-lucky'),
drinksElement = document.getElementById("#drinks");

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => selectCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
.then((response) => selectGlassCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => selectIngredientCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => response.json())
.then((response) => createRandom(response));


function selectCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${JSON.stringify(value.strCategory)}</option>`
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
    
}


luckyButtonElement.addEventListener('click', () => { 
    createRandom});

    function createRandom(response) {
    let dynamicHTML = ``;
					dynamicHTML += `<div class="drink"><img src="${response.drinks.strDrinkThumb}">
                    <h2 class="drink-title">${response.drinks.strDrink}</h2></div>`;
                    drinksElement.innerHTML = dynamicHTML;
}



