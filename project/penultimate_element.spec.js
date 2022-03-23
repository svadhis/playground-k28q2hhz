let exercice = require('./penultimate_element.js');
let test = require('./validate.js');

let testData = [
  [1, 12, 3, 6, 5, 12, 5, 9, 16, 10, 7],
  [982, 1543, 24, 543, 72, 1]
];

function correction(table){
    return table[table.length - 2];
}

test.validate(testData, exercice.getPenultimateElement, correction)