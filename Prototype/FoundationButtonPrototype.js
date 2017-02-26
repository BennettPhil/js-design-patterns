const AbstractButtonPrototype = require('./AbstractButtonPrototype.js');

class FoundationButtonPrototype extends AbstractButtonPrototype {
  display() {
    return `<a class="button ${this.cssClass}">${this.content}</a>`;
  }

  clone() {
    const clone = Object.assign({}, this);

    clone.display = this.display;

    return clone;
  }

  directClone() {
    return {
      cssClass: this.cssClass,
      content: this.content,
      display: this.display,
    };
  }
}

module.exports = FoundationButtonPrototype;
