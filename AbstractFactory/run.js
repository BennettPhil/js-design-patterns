const Bootstrap = require('./BootstrapFactory.js');

const Foundation = require('./FoundationFactory.js');

const Button = Bootstrap.createButton('btn-sm', 'click me');

console.log(Button.display());

const OtherButton = Foundation.createButton('small', 'click me');

console.log(OtherButton.display());
