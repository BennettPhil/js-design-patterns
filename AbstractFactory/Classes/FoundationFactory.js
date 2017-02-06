const AbstractFactory = require('./AbstractFactory.js');

const FoundationButton = require('./FoundationButton.js');

module.exports = class FoundationFactory extends AbstractFactory {
  createButton(cssClass, content) {
    return new FoundationButton(cssClass, content);
  }
};
