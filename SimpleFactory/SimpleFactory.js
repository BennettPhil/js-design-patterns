const Button = require('./Button.js');

class SimpleFactory {
  createButton() {
    return new Button();
  }
}

module.exports = new SimpleFactory;
