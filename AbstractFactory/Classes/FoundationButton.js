const AbstractButton = require('./AbstractButton.js');

module.exports = class FoundationButton extends AbstractButton {
  display() {
    return `<a class="button ${this.cssClass}">${this.content}</a>`;
  }
};
