let exercice = require('./first_element.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
    let result = exercice.getFirstElement.apply(null, test.values);
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
  printMessage('Standard Output', 'Well done !');
  success++;
} catch (error) {
  console.log('\nTECHIO> success false')
  printMessage('Standard Output', 'All tests did not pass');
}


function createTests() {
  let tests = [
    {
      name:"Test 1",
      values:[[1, 12, 3, 6, 5, 12, 5, 9, 16, 10, 7]],
      answer:getFirstElementAnswer([1, 12, 3, 6, 5, 12, 5, 9, 16, 10, 7])
    },
    {
      name:"Test 2",
      values:[[982, 1543, 24, 543, 72, 1]],
      answer:getFirstElementAnswer([982, 1543, 24, 543, 72, 1])
    }
  ]

  return tests;
}

function getFirstElementAnswer(table){
    return table[0];
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}