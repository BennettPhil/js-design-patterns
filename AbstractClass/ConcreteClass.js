const AbstractClass = require('./AbstractClass.js');

class ConcreteClass extends AbstractClass {
  returnSomething() {
    return this.something;
  }
}

module.exports = ConcreteClass;
