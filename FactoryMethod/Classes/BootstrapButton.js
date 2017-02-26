class BootstrapButton {
  constructor(cssClass, content) {
    this.cssClass = cssClass;
    this.content = content;
  }

  display() {
    return `<a class="btn ${this.cssClass}">${this.content}</a>`;
  }
}

module.exports = BootstrapButton;
