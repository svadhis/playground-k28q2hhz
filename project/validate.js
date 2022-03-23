let assert = require('assert');

function validate(testData, f, correction) {
    let success = 0;
    testData.forEach(function(test, i) {
        let result = f.apply(null, [test]);
        let expected = correction(test);
        printMessage('Standard Output', 'Test ' + (i + 1) + ' data : ' + test);
        printMessage('Standard Output', 'Test ' + (i + 1) + ' result : ' + result);
    if(result === expected){
        printMessage('Success', '✓ Test ' + (i + 1) + ' OK');
        success++;
    }
    else{
        printMessage('Error', 'X Test ' + (i + 1) + ' NOK : ' + expected + ' expected');
    }
    }, this);

    try {
        assert.equal(success, testData.length);
        printMessage('Result', 'Well done !');
        success++;
    } catch (error) {
        console.log('\nTECHIO> success false')
        printMessage('Result', 'All tests did not pass');
    }
}

function printMessage(channel, message) {
    console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

module.exports = {
    validate: validate
};