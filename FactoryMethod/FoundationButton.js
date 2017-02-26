class FoundationButton {
  constructor(cssClass, content) {
    this.cssClass = cssClass;
    this.content = content;
  }

  display() {
    return `<a class="button ${this.cssClass}">${this.content}</a>`;
  }
}

module.exports = FoundationButton;
