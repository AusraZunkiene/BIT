function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sk = rand(0, 99);
//Kategorija 1: 0 <= skaičius <= 10 - pakelti skaičių kvadratu ir atspausdinti
//galima kitu būdu: function category...
console.log(sk);

if(sk <= 10)
{let rez = sk**2; //čia reiktų = categoryOne Calculation(sk);arba šitą nutrint ir kelet consolėn prie Rezultatas: category...
    console.log(`Skaičius: ${sk}\t Kategorija: 1, \t Rezultatas: ${rez}`);
}

//Kategorija 2: 10 < skaičius < 20 - atspausdinti skaičių tokį koks jis yra;

else if(sk < 20) {
    let rez = sk;
    console.log(`Skaičius: ${sk} \t Kategorija: 2, \t Rezultatas: ${rez}`);
}
//Kategorija 3: 20 <= skaičius < 50  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti

else if(sk >= 20 && sk < 49 && sk % 2 === 0) {
    let desimtys = +sk.toString()[0]; '2'
    let rez = sk - desimtys;
    console.log(`Skaičius: ${sk}\t Kategorija: 3, \t Rezultatas: ${rez}`);
}
//Kategorija 4: 20 <= skaičius < 50  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;

else if(sk >= 20 && sk < 49 && sk % 2 !== 0) {
    let vienetai = sk % 10;
    let rez = (vienetai + sk) / 2;
    console.log(`Skaičius: ${sk}\t Kategorija: 4, \t Rezultatas: ${rez}`);
}
//Kategorija 5: 50 <= skaičius ir skaičius dalinasi iš 3 be liekanos:
//Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite

else if(sk >= 50 && sk % 3 === 0) {
    let a=rand(97,122),
        b=rand(97,122), 
        c=rand(97,122), 
        d=rand(97,122);
    let rez = String.fromCharCode(a) + 
        String.fromCharCode(b) + 
        String.fromCharCode(c) + 
        String.fromCharCode(d);
    console.log(`Skaičius: ${sk}\t Kategorija: 5, \t Rezultatas: ${rez}`);
}
//Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

else {console.log(`Skaičius netinkamas nei vienai kategorijai`);}
