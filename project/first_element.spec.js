let exercice = require('./first_element.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.getFirstElement.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);



try {
  assert.equal(success, tests.length);
  printMessage('Standard Output', 'C\'est une réussite ! ');
  success++;
} catch (error) {
  printMessage('Standard Output💡', 'Encore un petit effort.🤔');
  console.log('\nTECHIO> success false')
  console.error("Tous les tests ne sont pas justes !");
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
      answer:bissextileAnswer([982, 1543, 24, 543, 72, 1])
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