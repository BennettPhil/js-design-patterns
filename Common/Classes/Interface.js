class Interface {
  constructor(interfaceDefition) {
    const errors = new Set();

    // Check For Definition
    if (!interfaceDefition) {
      errors.add('Your interface has no definition');
    } else {
      // Process Definition
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      interfaceDefition.forEach((method) => {
        if (methods.indexOf(method.methodName) < 0) {
          errors.add(`Missing method : ${method.methodName}`);
        } else {
          // TODO : check for method parameters and returns, even possible??
        }
      });
    }

    // Check for errors.
    if (errors.size > 0) {
      errors.add(`${this.constructor.name} appears to be broken:`);
      throw Array.from(errors).join('\n');
    }
  }
}

module.exports = Interface;
