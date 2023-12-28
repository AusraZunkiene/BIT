const selectorius = document.querySelector('#dogs');
const selectoriusFoto = document.querySelector('#foto');
const selectoriusName = document.querySelector('#name');
fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {
     let dynamicHTML = ``;
     for(let array in atsakymas.message){
        if(atsakymas.message[array].length > 0) {
            for(let value of atsakymas.message[array])
        dynamicHTML += `<option>${value}  ${array}</option>`}
            else { dynamicHTML += `<option>${array}</option>`}}
       selectorius.innerHTML+= dynamicHTML;
   
});

fetch("https://dog.ceo/api/breed/hound/images")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {console.log(atsakymas)
    selectoriusFoto.innerHTML =`<img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg">`     
});


