const ButtonFactory = require('./Factory');

let Button = ButtonFactory.buildButton('Bootstrap', 'pink', 'Click Me');

console.log(Button.display());

Button = ButtonFactory.buildButton('Foundation', 'pink', 'Click Me');/* eslint-disable no-console */

console.log(Button.display());
