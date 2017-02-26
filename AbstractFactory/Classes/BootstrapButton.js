const AbstractButton = require('./AbstractButton.js');

class BootstrapButton extends AbstractButton {
  display() {
    return `<a class="btn ${this.cssClass}">${this.content}</a>`;
  }
}

module.exports = BootstrapButton;
