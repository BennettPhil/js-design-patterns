class AbstractFactory {
  constructor() {
    this.errorMessage = 'Abstract class AbstractFactory cannot be instantiated directly';
    if (this.constructor === AbstractFactory) {
      throw new TypeError(this.errorMessage);
    }
  }

  createButton() {
    this.errorMessage = 'Abtract Method createButton() cannot be called';
    throw new TypeError(this.errorMessage);
  }

};

module.exports = AbstractFactory;
