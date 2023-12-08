/*function pakeistiElementoTeksta() {
    let vardoIvestis = document.querySelector ('#vardas');
    let paragrafas = document.querySelector('.isskirtinis-paragrafas');
    let vardoIvestiesReiksme = vardoIvestis.value;
    paragrafas.innerText = `Sveiki prisijunge, ${vardoIvestiesReiksme}`;
}*/

let loginName = 'Petras';
let password = '123321';
function login() {
    let prisijungimoVardoIvestis =document.querySelector ("#prisijungimoVardas");
    let prisijungimoSlaptazodzioIvestis =document.querySelector ("#prisijungimoSlaptazodis");

    let prisijungimoVardas = prisijungimoVardoIvestis.value;
    let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;

if(prisijungimoVardas === loginName && password === prisijungimoSlaptazodis)
{
    console.log('Prisijungėte sėkmingai');
}
else{console.log('Prisijungimo duomenys blogi');
}
}
