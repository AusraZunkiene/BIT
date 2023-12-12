const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector('#add-button');
buttonElement.addEventListener('click', () => {
    const person = {};
    person.firstName = document.getElementById("firstNameInput").value;
    person.lastName = document.getElementById("lastNameInput").value;
    person.age = document.getElementById("ageInput").value;
    person.nationality = document.getElementById("nationalityInput").value;
    person.number = currentNumeration;
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
    document.getElementById("myTable").deleteRow(i);
}