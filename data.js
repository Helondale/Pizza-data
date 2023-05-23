function stringRepeat(number, str){
    return(str.repeat(number))
};
console.log(stringRepeat(2, "HawaiiPizza"));

function noSpace(str){
    return(str.replace(/\s+/g,''))
};
console.log(noSpace(" Ha wa iiP z za "));

function numberToString(number){
    return(number.toString());
};
console.log(numberToString(33));

function booleanToString(boolean){
return(boolean.toString(boolean))
};
console.log(booleanToString(true));

function abbrevName(string){
    return string
        .replace(/\b(\w)\w+/g, '$1.')
        .replace(/\s/g, '')
        .replace(/\.$/, '')
        .toUpperCase();
};
console.log(abbrevName("Hawaii Pizza"))

function nameLength(string){
   let words = string.split(' ')
   let wordsLength = []
   words.forEach((element) => {
    wordsLength.push(element + " = " + element.length)
   });
   return wordsLength
};
console.log(nameLength("Hawaii Pizza"));

function removeOrders(string){   
return string.substring(1).slice(0,-1)

};
console.log(removeOrders('1,2,3,4,5'));

function foodMenu(array){
let result = []
for (let i=1; i<=array.length; i++){
result.push(`${i}. ${array[i-1]}`)
}
return result
};
console.log(foodMenu(["Hawaii Pizza", "Gyros Pizza"]));
