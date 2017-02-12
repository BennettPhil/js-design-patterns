class Div {
  constructor() {
    this.class = null;
    this.children = new Set();
  }

  generate() {
    let childrenOutput = '';

    this.children.forEach((child) => {
      childrenOutput += child.generate();
    });

    return `<div class="${this.class}">${childrenOutput}</div>`;
  }
}

module.exports = Div;
