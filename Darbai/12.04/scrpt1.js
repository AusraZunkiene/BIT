function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*  Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
a.Iškritus herbui;
b.Tris kartus iškritus herbui;
c.Tris kartus iš eilės iškritus herbui;
*/

console.log('Monetos užduotis');

  while (true){
      let moneta = rand(0, 1);
      if (moneta === 1) {console.log('S');}
      else {console.log('H');
      break;}
    }

  console.log('Nauja sąlyga');

  let nulis = 0;
  while (true){
      let moneta = rand(0, 1);
      if (moneta === 1) {console.log('S');}
      else if(moneta === 0){nulis++;
        console.log('H');}
      if (nulis === 3){console.log('Tris kartus iškrito H')
        break;}     
    }

  console.log('Nauja sąlyga');
 
  let metimuSkaicius = 0;
  
  while (metimuSkaicius < 3) {
  let moneta = rand(0, 1);
  if (moneta === 0) {console.log("H");
    metimuSkaicius++}
  else {console.log("S");
 metimuSkaicius = 0;}
  } 
  console.log('Šaškių užduotis');
  /*Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.*/

  let petroSuma = 0;
  let kazioSuma = 0;
  while (true){
    let petroTaskai = rand(10, 20);
    let kazioTaskai = rand(5, 25);
    petroSuma += petroTaskai;
    kazioSuma += kazioTaskai;
    if (petroSuma >= 222) {console.log(`Laimėjo Petras; (Petro taškai: ${petroSuma}, Kazio taškai ${kazioSuma}).`) 
    break }
    else if (kazioSuma >= 222) {console.log(`Laimėjo Kazys; (Kazio taškai ${kazioSuma}, Petro taškai ${petroSuma}).`) 
    break }
  }
  console.log('Vinių užduotis:');
  /*Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
 “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.*/
 console.log('Vinių užduotis A');
 function newrand(min, max) {
  return min + Math.random() * (max - min);
}
/*let smugiai = 0;
let kalimuSuma = 425;
 while (true) {
  let kalimas = newrand(5, 20).toFixed(2);
  kalimuSuma -= kalimas;
 if (kalimuSuma >= 0){smugiai++}
 else {
  break
 }
}
console.log(`Reikėjo ${smugiai} smūgių 5 vinims įkalti.`);*/


let smugiai1 = 0;
let kalimuSuma1 = 85;
 while (true) {
  let kalimas1 = newrand(5, 20).toFixed(2);
  kalimuSuma1 -= kalimas1;
 if (kalimuSuma1 >= 0){smugiai1++}
 else {
  break
 }
}
//console.log(`Reikėjo ${smugiai1} smūgių 1 viniui įkalti.`);


let smugiai2 = 0;
let kalimuSuma2 = 85;
 while (true) {
  let kalimas2 = newrand(5, 20).toFixed(2);
  kalimuSuma2 -= kalimas2;
 if (kalimuSuma2 >= 0){smugiai2++}
 else {
  break
 }
}
//console.log(`Reikėjo ${smugiai2} smūgių 2 viniui įkalti.`);


let smugiai3 = 0;
let kalimuSuma3 = 85;
 while (true) {
  let kalimas3 = newrand(5, 20).toFixed(2);
  kalimuSuma3 -= kalimas3;
 if (kalimuSuma3 >= 0){smugiai3++}
 else {
  break
 }
}
//console.log(`Reikėjo ${smugiai3} smūgių 3 viniui įkalti.`);

let smugiai4 = 0;
let kalimuSuma4 = 85;
 while (true) {
  let kalimas4 = newrand(5, 20).toFixed(2);
  kalimuSuma4 -= kalimas4;
 if (kalimuSuma4 >= 0){smugiai4++}
 else {
  break
 }
}
//console.log(`Reikėjo ${smugiai4} smūgių 4 viniui įkalti.`);

let smugiai5 = 0;
let kalimuSuma5 = 85;
 while (true) {
  let kalimas5 = newrand(5, 20).toFixed(2);
  kalimuSuma5 -= kalimas5;
 if (kalimuSuma5 >= 0){smugiai5++}
 else {
  break
 }
}
//console.log(`Reikėjo ${smugiai5} smūgių 5 viniui įkalti.`);
let all = smugiai1 + smugiai2 + smugiai3 + smugiai4 + smugiai5;
console.log(`5 vinims įkalti reikėjo: ${all}.`);


console.log('Vinių užduotis B');
function newRand() {
if (newrand !== 0.5){
  return newrand;}
  else {return 0;
  }
}

console.log(newRand(20, 50))
