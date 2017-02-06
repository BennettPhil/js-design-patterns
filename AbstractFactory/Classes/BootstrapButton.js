const AbstractButton = require('./AbstractButton.js');

module.exports = class BootstrapButton extends AbstractButton {
  display() {
    return `<a class="btn ${this.cssClass}">${this.content}</a>`;
  }
};
