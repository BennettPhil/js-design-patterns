module.exports = class AbstractClass {
  constructor() {
    this.something = 'Something';
    this.errorMessage = 'Abstract class "AbstractClass" cannot be instantiated directly';
    if (this.constructor === AbstractClass) {
      throw new TypeError(this.errorMessage);
    }
  }

  returnText() {
    // TODO: Decided if this is the correct error type.
    this.errorMessage = 'Abtract Method returnText() cannot be called';
    throw new Error(this.errorMessage);
  }

  returnSomethingElse() {
    // TODO: Decided if this is the correct error type. Do I need to create a new Error type?
    this.errorMessage = 'Abtract Method returnText() cannot be called';
    throw new Error(this.errorMessage);
  }

};
