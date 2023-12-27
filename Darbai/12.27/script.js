const selectorius = document.querySelector('.dogs');
fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {
     console.log(atsakymas.message)
     let dynamicHTML = ``;
     for(let i=0; i < 98; i++){
        dynamicHTML += `<select><option>${Object.keys(atsakymas.message)[i]}</option></`}
     document.write(dynamicHTML);
   

});

/*fetch("https://dog.ceo/api/breed/hound/images")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {console.log(atsakymas.message[1]);


document.write (`<img src="${atsakymas.message[1]}"/>`)     
});
*/