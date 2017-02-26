const SimpleFactory = require('./Classes/SimpleFactory.js');

const factory = new SimpleFactory();
const button = factory.createButton();

/* eslint-disable no-console */
console.log(button.click());
