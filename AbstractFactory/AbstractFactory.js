const BootstrapFactory = require('./Classes/BootstrapFactory.js');

const FoundationFactory = require('./Classes/FoundationFactory.js');

const Bootstrap = new BootstrapFactory();
const Button = Bootstrap.createButton('btn-sm', 'click me');

/* eslint-disable no-console */
console.log(Button.display());

const Foundation = new FoundationFactory();
const OtherButton = Foundation.createButton('small', 'click me');

/* eslint-disable no-console */
console.log(OtherButton.display());
