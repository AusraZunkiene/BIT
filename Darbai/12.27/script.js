fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {console.log(atsakymas.message);
		document.write(`"${atsakymas.message}"`);
    });


   /* for (let i = 0; i < options.length; i++) {
        let option = document.getElementById(".dogs");
        option.value = options[i].value;
        option.text = options[i].text;
      }*/