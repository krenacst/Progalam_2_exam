/* 1. feladat
string(karakterlánc)       number(szám)      boolean(logikai érték)
        "alma"                  8765                true, false
2. feladat
Érték szerinti paramétermegadás: let a = 1; (Megadom az a változó értékét, ami 1 lesz.)
Referencia szerinti paramétermegadás: array[0] = 1; (A tömb első elemének szánom az 1-et
    a tömb első elemére indexeléssel hivatkoztam.)
Az egyik módszernél direktben láttam el paraméterrel a változót, a másikban pedig egy referencia
viszonyítást használtam.

3. feladat
Az eldöntés tétele: A függvény vár egy értéket és egy tömböt vár paraméterül, és megmondja, hogy
az adott érték szerepel-e a tömbben, vagy nem. Ennek megfelelően egy logikai értékkel tér vissza, ami
true (igen, vagyis szerepel az adott érték a tömbben) vagy false (azaz hamis, azaz nem szerepel az adott
    érték a tömbben.)
    if (0 < 1) {return true;}
    else {return false;}

4. feladat
A maximum függvény egy tömböt vár paraméterül és meghatározza a benne szereplő értékek közül a legnagyobbat.
const maxArray = (array) => {
    let max = array[0];
    for ( let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxArray([4, 5, 7, 2, 8]));

5. feladat

const div2 = () => {
  for (let i = 10; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
div2();

6. Metszet tétele: Két tömböt vár paraméterül és meghatározza a két tömb közös részét, azaz metszetét.
*/
const metszet = (array1, array2) => {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[0] === array2[i]) {
      result.push(array2[i]);
    }
    if (array1[1] === array2[i]) {
      result.push(array2[i]);
    }
    if (array1[2] === array2[i]) {
      result.push(array2[i]);
    }
    if (array1[3] === array2[i]) {
      result.push(array2[i]);
    }
    if (array1[4] === array2[i]) {
      result.push(array2[i]);
    }
  }
  return result;
};

console.log(metszet([1, 2, 3, 4, 5], [5, 6, 2, 7, 1]));
/*
7. feladat:

const add = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};
const hatv = (a, b) => {
  return a ^ b ;
};

const operation = (a, b, o) => {
  return o(a, b);
};
console.log(operation(9, 6, mul));

8. feladat:

const genArr = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
var arr = genArr(5, 6);

const fillA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
  return arr;
};
console.log(fillA(arr));
*/
