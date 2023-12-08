function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 7 užduotis (Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. )
/* Aray sukūrimas vienas būdas: 
let allNumber = new Array(4);

kint[0] = rand(0,2);
kint[1] = rand(0,2);
kint[2] = rand(0,2);
kint[3] = rand(0,2);
kint.push(10);

console.log(allNumber);*/
//Aray sukūrimas kitas būdas: 
let kint = [rand(0, 2), rand(0, 2), rand(0, 2), rand(0, 2)];
 console.log(kint);
 console.log(kint[1]);

let count = new Array(3).fill(0);

    console.log(kint[0], kint[1], kint[2], kint[3]);

if(kint[0] === 0) count[0]++;
else if(kint[0] === 1) count[1]++
else count[2]++;

if(kint[1] === 0) count[0]++;
else if(kint[1] === 1) count[1]++
else count[2]++;

if(kint[2] === 0) count[0]++;
else if(kint[2] === 1) count[1]++
else count[2]++;

if(kint[3] === 0) count[0]++;
else if(kint[3] === 1) count[1]++
else count[2]++;

console.log(`Nulių - ${count[0]}, Vienetų - ${count[1]}, Dvejetų - ${count[0]}`);