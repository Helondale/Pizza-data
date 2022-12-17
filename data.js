// YOUR CODE COMES HERE



























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