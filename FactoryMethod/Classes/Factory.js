const BootstrapButton = require('./BootstrapButton.js');
const FoundationButton = require('./FoundationButton.js');

class Factory {
  buildButton($type, $cssClass, $content) {
    switch ($type) {
      case 'Bootstrap':
        return new BootstrapButton($cssClass, $content);
      case 'Foundation':
        return new FoundationButton($cssClass, $content);
      default:
        throw new TypeError('Unknown type.');
    }
  }
}

module.exports = Factory;
