class AbstractButton {

  constructor(cssClass, content) {
    this.cssClass = cssClass;
    this.content = content;

    this.errorMessage = 'Abstract class AbstractButton cannot be instantiated directly';
    if (this.constructor === AbstractButton) {
      throw new TypeError(this.errorMessage);
    }
  }

  display() {
    this.errorMessage = 'Abtract Method display() cannot be called';
    throw new TypeError(this.errorMessage);
  }

}

module.exports = AbstractButton;
