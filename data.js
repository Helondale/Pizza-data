// YOUR CODE COMES HERE
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

}
console.log(abbrevName("Hawaii Pizza"))

function nameLength(string){
   let words = string.split(' ')
   let wordsLength = []
   words.forEach((cica) => {
    wordsLength.push(cica + " = " +cica.length)

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
//result.push(i+". " + array[i-1])
}
return result

};
console.log(foodMenu(["Hawaii Pizza", "Gyros Pizza"]));






















// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "stringRepeat", content: stringRepeat, type: "function"},
        {name: "noSpace", content: noSpace, type: "function"},
        {name: "numberToString", content: numberToString, type: "function"},
        {name: "booleanToString", content: booleanToString, type: "function"},
        {name: "abbrevName", content: abbrevName, type: "function"},
        {name: "nameLength", content: nameLength, type: "function"},
        {name: "removeOrders", content: removeOrders, type: "function"},
        {name: "foodMenu", content: foodMenu, type: "function"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};