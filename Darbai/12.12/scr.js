const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector('#add-button');
buttonElement.addEventListener('click', ()=>{
    const person = {};
    person.firstName = document.getElementById("firstNameInput").value;
    person.lasttName = document.getElementById("firstLastInput").value;
    person.age = document.getElementById("ageInput").value;
    person.fnationality = document.getElementById("nationalityInput").value;
    person.number = currentNumeration;

    currentNumeration++
    console.log(person);

    people.push(person);
    generateTableContent(people);
});

function generateTableContent(people)
{
    let ObjektaiHTML = `<tr>`
    for(let person of people){
        ObjektaiHTML += `<tr>
        <td>${person.firstName}</td>
        <td>${person.lasttName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`
    }
    const tbody = document.querySelector('table body');
    tbody.innerHTML = ObjektaiHTML;
}