add = (a,b) => JSON.parse(a) + JSON.parse(b)
// if ((a)||(b) === isNaN){
// throw new Error ('Needs Number as Parameter')
// }
subtract = (a, b) => JSON.parse(a) - JSON.parse(b)
divide = (a, b) => JSON.parse(a) / JSON.parse(b)
multiply = (a, b) => JSON.parse(a) * JSON.parse(b)

module.exports = {
    add,
    subtract,
    divide,
    multiply
}

console.log(add(3, 5));