/* 1. number         string          boolean          array           object
  1,            "bab"           true            [1, 2, 3]       {o:1, p:4, i:8}

 2. Az argumentum másolata adódik át mind érték szerinti, mind renferencia szerinti átadásnál.

3. Eldöntés tétele. Adott egy tömbünk és egy elemünk. Az utóbbiról eldöntjük, hogy a tömb tartalmazza-e.
 let tomb = [1, 2, 3, 4, 5, 6, 7];
let searched = 4;
let h = 0;
for (let i = 0; i < tomb.length; i++) {
  h++;
}
if (h > 0) {
  console.log('Van találat.');
} else { console.log('Nincs benne a keresett elem a tömbben.'); }
// vagy while ciklussal:
let i = 0;
while (i < tomb.length && tomb[i] !== searched) {
  i++;
}
if (i < tomb.length) {
  console.log('3. feladat, eldöntés:Van találat.');
} else { console.log('3. feladat, eldöntés: Nincs találat.'); }

// 4. feladat:
let arr2 = [1, 2, 3, 4, 5, 6, 7, 89, 8];
let min = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}
console.log('4. feladat, minimum: ' + min);

// 5. feladat:

console.log('5. feladat: ');
let l = -100;
for (let j = l; j < 0; j++) {
  if (j % 3 === 0) {
    console.log(j);
  }
}
/*
  // 6. metszet tétele
  let tomb1 = [1, 2, 3, 4, 5, 6, 7, 8];

  let tomb2 = [10, 6, 9, 8, 7, 5];

  let metszet = [];

  let m = 0;
  let hu;

  for (let i = 0; i < tomb1.length; i++) {
    hu = 0;
    while (hu < tomb2.length && tomb2[hu] !== tomb1[i]) {
      hu++;
    }
    if (hu < tomb2.length) {
      metszet[m++] = tomb2[hu];
    }
  }
  console.log('6. Metszet: ' + metszet);
  // 7. három függvényt exportáló modul
  /*
const mul = (a, b) => {
  return a * b;
};

const gyok = (a, b) => {
  return a---gyök---b?????;
};

const fakt = (a) => {
    return !a;
}
const operation = (a, b, o) => {
  return o(a, b);
};
module.exports = calculator; */

// 8.

let readline = require('readline-sync');
let a = readline.question('Add meg az első számot!');
let b = readline.question('Add meg a második számot!');
a = parseInt(a);
b = parseInt(b);
const generate2D = (a, b) => {
  let arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = new Array(b);
  }
  return arr;
};

let arr = generate2D(a, b);
// console.log(arr);

const twArray = (rar) => {
  for (let i = 0; i < rar.length; i++) {
    for (let j = 0; j < rar[i].length; j++) {
      rar[i][j] = i + j;
    }
  }
  return rar;
};

console.log(twArray(arr));
