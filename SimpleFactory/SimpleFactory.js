const SimpleFactory = require('./Classes/SimpleFactory.js');

const factory = new SimpleFactory();
const button = factory.createButton();

console.log(button.click());
