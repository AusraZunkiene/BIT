const cocktailNameFilterElement = document.querySelector('#coctail-name-filter'),
categorySelectElement = document.querySelector('#category-select'),
luckyButtonElement = document.querySelector('#im-lucky'),
drinksElement = document.getElementById("#drinks");

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => selectCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
.then((response) => console.log(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => console.log(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => response.json())
.then((response) => console.log(response));


function selectCategory() {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value in category.drinks) {
            categoryArr.push(value)}
     
    for (let index of categoryArr)
                dynamicHTML += `<option>${categoryArr[index]}</option>`
        
        categorySelectElement.innerHTML = dynamicHTML
    
}


/*luckyButtonElement.addEventListener('click', () => { 
    createRandom});

const createRandom = () => {
    let dynamicHTML = ``;
					dynamicHTML += `  <div class="drink"><img src="${response.strDrinkThumb}">
                    <h2 class="drink-title">${response.strDrink}</h2></div>`;
                    drinksElement.innerHTML = dynamicHTML;
}*/



