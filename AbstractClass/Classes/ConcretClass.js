const AbstractClass = require('./AbstractClass.js');

class ConcretClass extends AbstractClass {
  returnSomething() {
    return this.something;
  }
}

module.exports = ConcretClass;
