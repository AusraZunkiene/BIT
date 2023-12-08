function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 užduotis (Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.)
console.log('1 užduotis');
let aktoriausVardas = "Jackie";
let aktoriausPavarde = "Chan";

if(aktoriausVardas.length > aktoriausPavarde.length){
    console.log(aktoriausPavarde);
}
else if(aktoriausVardas.length === aktoriausPavarde.length){
    console.log(aktoriausVardas +" "+aktoriausPavarde);
}
else {
    console.log(aktoriausVardas)
}

// 2 užduotis (Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".)
console.log('2 užduotis');
let manoVardas = "Aušra", manoPavarde = "Zunkienė", manoMetai = "1991", dabar = "2023";
let amzius = dabar - manoMetai;

console.log("Aš esu " + manoVardas + " " + manoPavarde + "." + " Man yra " + amzius + " metai-(ų)");

// 3 užduotis (Sukurkite 2 kintamuosius. Jiems priskirkite vartotojo vardą ir pavardę. Sukurti trečią kintamąjį ‘inicialai’ sudarytą iš dviejų pirmųjų vardo ir pavardės raidžių.)
console.log('3 užduotis');
let vartotojoVardas = "Petras";
let vartotojoPavarde = "Jonaitis";
let vartotojoInicialai = vartotojoVardas[0] + vartotojoPavarde[0];

console.log(vartotojoInicialai);

// 4 užduotis (Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.)
console.log('4 užduotis');
let a = aktoriausVardas.length;
let b = aktoriausPavarde.length;
let c = aktoriausVardas[a-3] + aktoriausVardas[a-2]+ aktoriausVardas[a-1]+ aktoriausPavarde[b-3] + aktoriausPavarde[b-2] + aktoriausPavarde[b-1];

console.log(c)

// 5 užduotis (Sukurti kintamąjį data ir priskirti jai datos reikšmę tokiu formatu: YYYY-MM-DD, pvz: 2023-11-07. sukurkite programą, kuri pasiima mėnesio reikšmę ir atspausdina gauto mėnesio pavadinimą.)
console.log('5 užduotis');
let data = "2023-07-28";
let menuo = data[5] + data[6];
if(menuo ==='01') console.log('Sausis')
else if(menuo ==='02') console.log('Vasaris');
else if(menuo ==='03') console.log('Kovas');
else if(menuo ==='04') console.log('Balandis');
else if(menuo ==='05') console.log('Gegužė');
else if(menuo ==='06') console.log('Birželis');
else if(menuo ==='07') console.log('Liepa');
else if(menuo ==='08') console.log('Rugpjūtis');
else if(menuo ==='09') console.log('Rugsėjis');
else if(menuo ==='10') console.log('Spalis');
else if(menuo ==='11') console.log('Lapkritis');
else if(menuo ==='12') console.log('Gruodis');

// 6 užduotis (Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.)
console.log('6 užduotis');
let eilerastis = 'Once upon a time in hollywood';
let eilerastisMazosiomis = eilerastis.toLowerCase();
let pakeistas = eilerastisMazosiomis.replaceAll('o','*');

console.log(pakeistas);

// 7 užduotis (Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. )
console.log('7 užduotis');
let oneNumber = rand(0, 2), 
    twoNumber = rand(0, 2), 
    threeNumber = rand(0, 2), 
    fourNumber = rand(0, 2);

console.log(oneNumber, twoNumber, threeNumber, fourNumber);

let countZero = 0.
    countOne = 0,
    countTwo = 0;

if(oneNumber === 0) countZero++;
else if(oneNumber === 1) countOne++
else countTwo++;

if(twoNumber === 0) countZero++;
else if(twoNumber === 1) countOne++
else countTwo++;

if(threeNumber === 0) countZero++;
else if(threeNumber === 1) countOne++
else countTwo++;

if(fourNumber === 0) countZero++;
else if(fourNumber === 1) countOne++
else countTwo++;

console.log("Nulių - $(countZero)\t 1 - $(countOne)\t 2 -$(countTwo)");

// 8 užduotis (Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.)
console.log('8 užduotis');
let first = rand(0,4);
let second = rand(0,4);

console.log(first, second);

if (first === 0 || second === 0) console.log('Dalyba su 0 negalima');
else 
{
    if (first >= second) console.log((first / second).toFixed(2))
    else console.log((second / first).toFixed(2));
}


// 9 užduotis (Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.)
console.log('9 užduotis');
let pirmas = rand(0,25), 
    antras = rand(0,25), 
    trecias= rand(0,25);

console.log(pirmas, antras, trecias);

if(pirmas === antras || pirmas === trecias|| antras === trecias){
    console.log('Negalima nustatyti vidurinio skaičiaus');}
else if(pirmas > antras && pirmas < trecias) {console.log(pirmas);}
else if(pirmas < antras && pirmas > trecias) {console.log(pirmas);}
else if(antras> pirmas && antras < trecias) {console.log(antras);}
else if(antras < pirmas && antras > trecias) {console.log(antras);}
else if(trecias > antras&& trecias < pirmas) {console.log(trecias);}
else if(trecias < antras && trecias > pirmas) {console.log(trecias);}

/*kitas būdas išspręst 9 užduotį

let sk1 = rand(0, 25),
    sk2 = rand(0, 25),
    sk3 = rand(0, 25);

    let didziausias = Math.max(sk1, sk2, sk3),
        maziausias = Math.min(sk1, sk2, sk3);

        if (sk1 !== didziausias && sk1 !== maziausias) console.log(sk1));
        else if (sk2 !== didziausias && sk2 !== maziausias) console.log(sk2));
        else console.log(sk3);
*/

// 10 užduotis ( Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis: 3 simboliai.)
console.log('10 užduotis');
let kintamasPirmas = rand(97,122);
    kintamasAntras = rand(97,122),
    kintamasTrecias = rand(97,122);

console.log(String.fromCharCode(kintamasPirmas) + String.fromCharCode(kintamasAntras) + String.fromCharCode(kintamasTrecias));

// 11 užduotis (Užduotis: pakeiskite visas šablonines reikšmes pagal pateiktas reikšmes)
console.log('11 užduotis');
let text = "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite.";
text = text.replaceAll(/planet/g,"earth");
text = text.replaceAll(/star/g,"Sun");
text = text.replaceAll(/age/g,"4.54 billion years");
text = text.replaceAll(/satellite/g,"moon");
console.log(text);

// 12 užduotis (Užduotis: Pasinaudodami jau pateikta rand funkcija, sukurkite kitą funkciją, kuri sugeneruoja atsitiktinį skaičių nuo minimalios iki maksimalios reikšmės su dviem skaitmenimis po kablelio.)
console.log('12 užduotis');
let suKableliu = rand(0, 10000);
Math.floor(Math.random() * (10.00 - 1.00 + 1.00)) + 1.00;
result = Math.round(suKableliu * 100) / 10000;

console.log(result);
//Sukurti du kintamuosius a = 5 bei b = 20; Nepasinaudojant trečiu kintamuoju, apkeisti šių dviejų kintamųjų reikšmes vietomis;
let pirma = 5, 
    antra = 6;
[pirma, antra] = [antra, pirma];
console.log(`${pirma} ${antra}`);