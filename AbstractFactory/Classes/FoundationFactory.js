const AbstractFactory = require('./AbstractFactory.js');

const FoundationButton = require('./FoundationButton.js');

class FoundationFactory extends AbstractFactory {
  createButton(cssClass, content) {
    return new FoundationButton(cssClass, content);
  }
}

module.exports = FoundationFactory;
