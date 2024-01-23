function twonumber()
{
let x = parseFloat(document.querySelector(`#first`).value);
let y = parseFloat(document.querySelector(`#second`).value);

let selector = document.querySelector(`#mySelect`).value;
let rezu;

if (isNaN(x) || isNaN(y))
{document.querySelector(`#rezu`).innerText = 'Atsakymas: Privalote įvesti abu skaičius';
}

if (selector === 'addition') rezu = x + y;
else if (selector === 'substract') rezu = x - y;
else if (selector === 'multiply') rezu = x * y;
else if (selector === 'divide' && y !== 0) rezu = x / y;
else if (selector === 'square') {
    if(x === 0 && y <= 0)
        document.querySelector(`#rezu`).innerText = 'Atsakymas: Šio veiksmo atlikti negalima'; 
    else {rezu = x ** y;}}

document.querySelector(`#rezu`).innerText = `Atsakymas: ${rezu}`;
}
