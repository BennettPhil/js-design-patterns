const Factory = require('./Classes/Factory');

const ButtonFactory = new Factory();

let Button = ButtonFactory.buildButton('Bootstrap', 'pink', 'Click Me');

/* eslint-disable no-console */
console.log(Button.display());
/* eslint-enable no-console */

Button = ButtonFactory.buildButton('Foundation', 'pink', 'Click Me');/* eslint-disable no-console */

/* eslint-disable no-console */
console.log(Button.display());
