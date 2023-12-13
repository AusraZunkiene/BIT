const people = [];
const possibleNationalities = ["Lithuanian", "Latvian", "German"];
let currentNumeration = 1;

const buttonElement = document.querySelector('#add-button');
function validateName(name) {
   // tikrinam ar vardas atitinka reikalavimuas, nėra skaičiu ir grazinti folse- validavimas su regexu
    let isValid = true;
    if(!name)
    {
        isValid = false;
    }
    //regex patikrinimas, ar bent vienas toks simbolis yra
    if(/[0-9]/.test(name) || /[!@#$%^&*()?+-.,/{}]/.test(name))
    {
        isValid = false;
    }
    return isValid;
}
function validateAge(age)
{
    let isValid = true;
    if(!age) isValid = false;
  
    if(isNaN(parseInt(age))) isValid = false;

    if(age < 0 || age > 200) isValid = false;

    if(age % 1 !== 0)  isValid = false;
    
    return isValid;
}
function isValidNationality(nationality) {
return possibleNationalities.include(nationality);
}
buttonElement.addEventListener('click', () => {
    const person = {};
    person.firstName = document.getElementById("firstNameInput").value;
    person.lastName = document.getElementById("lastNameInput").value;
    person.age = document.getElementById("ageInput").value;
    person.nationality = document.getElementById("nationalityInput").value;
    person.number = currentNumeration;

    if (!validateName(person.firstName) ||
        !validateName(person.lastName) ||
        !validateName(person.age) ||
        !isValidNationality(person.nationality))
        {alert("Visi laukai privalo būti užpildyti"); 
        return;}

    people.push(person);
    currentNumeration++
    console.log(person);
    
    generateTableContent(people);
});
function generateTableContent(people)
{
    let ObjektaiHTML = ``;
    for(let person of people){
        ObjektaiHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
    }
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ObjektaiHTML;
}
function myFunction() {
    let i = document.getElementById("cutInput").value;
    if (i < people.length)document.getElementById("myTable").deleteRow(i);
    else document.getElementById("rezultatas").innerHTML ="Tokia numeracija lentelėje neegzistuoja";
  }
 