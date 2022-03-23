let exercice = require('./penultimate_element.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
    let result = exercice.getPenultimateElement.apply(null, test.values);
    printMessage('Standard Output', test.name+' result : '+result);
  if(result === test.answer){
    printMessage('Success', '✓ '+test.name+' OK');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' NOK : '+test.answer+' expected');
  }
}, this);

try {
  assert.equal(success, tests.length);
  printMessage('Result', 'Well done !');
  success++;
} catch (error) {
  console.log('\nTECHIO> success false')
  printMessage('Result', 'All tests did not pass');
}


function createTests() {
  let tests = [
    {
      name:"Test 1",
      values:[[1, 12, 3, 6, 5, 12, 5, 9, 16, 10, 7]],
      answer:getPenultimateElementAnswer([1, 12, 3, 6, 5, 12, 5, 9, 16, 10, 7])
    },
    {
      name:"Test 2",
      values:[[982, 1543, 24, 543, 72, 1]],
      answer:getPenultimateElementAnswer([982, 1543, 24, 543, 72, 1])
    }
  ]

  return tests;
}

function getPenultimateElementAnswer(table){
    return table[table.length - 2];
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}