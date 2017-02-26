const AbstractButton = require('./AbstractButton.js');

class FoundationButton extends AbstractButton {
  display() {
    return `<a class="button ${this.cssClass}">${this.content}</a>`;
  }
};

module.exports = FoundationButton;
