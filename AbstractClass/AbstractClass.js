class AbstractClass {
  constructor() {
    this.something = 'Something';
    this.errorMessage = 'Abstract class AbstractClass  cannot be instantiated directly';
    if (this.constructor === AbstractClass) {
      throw new TypeError(this.errorMessage);
    }
  }

  returnText() {
    this.errorMessage = 'Abtract Method returnText() cannot be called';
    throw new TypeError(this.errorMessage);
  }

  returnSomethingElse() {
    this.errorMessage = 'Abtract Method returnText() cannot be called';
    throw new TypeError(this.errorMessage);
  }

}

module.exports = AbstractClass;
