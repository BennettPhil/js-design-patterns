class AbstractButtonPrototype {
  constructor(cssClass, content) {
    this.cssClass = cssClass;
    this.content = content;

    this.errorMessage = 'Abstract class AbstractClass  cannot be instantiated directly';
    if (this.constructor === AbstractButtonPrototype) {
      throw new TypeError(this.errorMessage);
    }
  }

  display() {
    this.errorMessage = 'Abtract Method display can not be callsed';
    throw new TypeError(this.errorMessage);
  }

  clone() {
    this.errorMessage = 'Abtract Method clone can not be callsed';
    throw new TypeError(this.errorMessage);
  }

  directClone() {
    this.errorMessage = 'Abtract Method directClone can not be callsed';
    throw new TypeError(this.errorMessage);
  }
}

module.exports = AbstractButtonPrototype;
