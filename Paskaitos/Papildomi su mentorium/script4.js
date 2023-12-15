function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*  
Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių;
Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento. 
Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite. 
 
*/
//1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;
function firstFunction(text) {
    document.getElementById("h1").innerHTML = text;
  };
  firstFunction("Labas rytas");

/*function firstFunction() {
  let tagas = document.createElement("h1");
  let textas = document.createTextNode("labas kaip tu")
  tagas.appendChild(textas);
  document.body.appendChild(tagas);
  }
  firstFunction();*/
 
// 2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

  function secondFunction(text2, number) {
    if (number === 1) document.getElementById("h1").innerHTML = text2;
    else if (number === 2) document.getElementById("h2").innerHTML = text2;
    else if (number === 3) document.getElementById("h3").innerHTML = text2;
    else if (number === 4) document.getElementById("h4").innerHTML = text2;
    else if (number === 5) document.getElementById("h5").innerHTML = text2;
    else if (number === 6) document.getElementById("h6").innerHTML = text2;
  };
  secondFunction("Laba diena", 5);

// 3. Generuokite atsitiktinį stringą, pasinaudodami kodu md5(time()). Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją ir preg_replace_callback();


let strng = "";
allNumber = [];
for (let i = 0; i < 32; i++) {
let randStringas = rand(0, 1);
let randNumber = String.fromCharCode(rand(48, 57));
let randLetter = String.fromCharCode(rand(97, 122));
console.log(randStringas)
if(randStringas === 1) {
  allNumber.push(randNumber);
}
else {strng += randLetter; }

}
document.write(strng);
document.getElementById("p").innerHTML = allNumber;


// 4.Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių;
document.write("<br></br>");
document.write("Nauja užduotis:");
document.write("<br></br>");
function fourthFunction(x) {
  let number = x;
  let numberDivision = 0;

  if (x === 1) return 1;
  else if (x + (-x) !== 0) return "Privaloma įvesti sveiką skaičių";
  else {for (let i = 1; i < number; ++i) {
      if (x % i === 0) {
          number = x / i;
          if (number != i) {
            numberDivision++;
          }
          numberDivision++;
      }}
  }
  return numberDivision;
}
let rezas = fourthFunction(20);
document.write(rezas);