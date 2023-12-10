function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*  Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
a.Iškritus herbui;
b.Tris kartus iškritus herbui;
c.Tris kartus iš eilės iškritus herbui;
*/

console.log('<br>Nauja sąlyga <br>');

  while (true){
      let moneta = rand(0, 1);
      if (moneta === 1) {console.log('S');
    break; }
      else {console.log('H');}
    }

  console.log('<br>Nauja sąlyga <br>');

  let nulis = 0;
  while (true){
      let moneta = rand(0, 1);
      if (moneta === 0) {nulis++;
        console.log('H');}
      else if(nulis === 3) {console.log('HHH')
        break; }
      else {console.log('S');}
      
    }

  console.log('<br>Nauja sąlyga <br>');
 
  let metimuSkaicius = 0;
  
  while (metimuSkaicius < 3) {
  let moneta = rand(0, 1);
  if (moneta === 0) {console.log("H");
    metimuSkaicius++}
  else {console.log("S");
 metimuSkaicius = 0;}
  } 