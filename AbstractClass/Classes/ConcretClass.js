var AbstractClass = require('./AbstractClass.js');

module.exports = class ConcretClass extends AbstractClass {
    returnSomething() {
      return 'Something';
    }
}
