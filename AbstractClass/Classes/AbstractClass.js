module.exports = class AbstractClass {
    constructor() {
        if (this.constructor === AbstractClass) {
            throw new TypeError('Abstract class "AbstractClass" cannot be instantiated directly.');
        }
    }

    returnText() {
      throw new Error('Abtract Method "returnText" cannon be called');
    }

    returnSomethingElse(){
      throw new Error('Abtract Method "returnSomethingElse" cannon be called');
    }
}
