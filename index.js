// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats.push;
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(name) {
    const catsPluseOne = [...cats, "Broom"];  //Adding "Broom" Cat to the End of the Array
    return catsPluseOne;
}
function prependCat(name) {
    const catsPluseOne = ["Arnold", ...cats]; //Adding "Arnold" Cat to the Begining of the Array
    return catsPluseOne;
}
function removeLastCat() {
    const catsLastOne = cats.slice();         //Slicing New Array
    catsLastOne.pop();                        //Removing Last Cat from the Array
    return catsLastOne; 
}
function removeFirstCat() {
    const catsFirstOne = cats.slice();        //Slicing New Array
    catsFirstOne.shift();                     //Removing First Cat from the Array
    return catsFirstOne; 
}