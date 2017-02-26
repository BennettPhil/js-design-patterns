const AbstractFactory = require('./AbstractFactory.js');

const BootstrapButton = require('./BootstrapButton.js');

class BootstrapFactory extends AbstractFactory {
  createButton(cssClass, content) {
    return new BootstrapButton(cssClass, content);
  }
}

module.exports = BootstrapFactory;
