/*1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;*/
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('1 užduotis');
const generuotiX = (length, min, max) => {
    const masyvas = [];
    for (let i = 0; i < length; i++) masyvas.push(rand(min, max));
    return masyvas;
}
console.log('2 užduotis');
const randStringui = (length) => {
    let strng = "";
    for (let i = 0; i < length; i++) {
       strng += String.fromCharCode(rand(65, 90));}
    return strng;
}
const masyvasStringui = [];
for (let i = 0; i < 100; i++) {
	masyvasStringui.push(randStringui(4));
}
console.log(masyvasStringui);




