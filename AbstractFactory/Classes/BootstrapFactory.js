const AbstractFactory = require('./AbstractFactory.js');

const BootstrapButton = require('./BootstrapButton.js');

module.exports = class BootstrapFactory extends AbstractFactory {
  createButton(cssClass, content) {
    return new BootstrapButton(cssClass, content);
  }
};
