class BootstrapButton {
  constructor(link, text) {
    this.link = link;
    this.text = text;
  }
  generate() {
    return `<a class="btn" src="${this.link}">${this.text}</a>`;
  }
}

module.exports = BootstrapButton;
