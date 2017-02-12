const Interface = require('./Interface.js');

class BuilderInterface extends Interface {
  constructor() {
    var interfaceDefition = [
      {
        'methodName': 'createHero',
        'methodParams': [],
        'methodReturns': [],
      },
      {
        'methodName': 'addBackgroundImage',
        'methodParams': [],
        'methodReturns': [],
      },
      {
        'methodName': 'addHeader',
        'methodParams': [],
        'methodReturns': [],
      },
      {
        'methodName': 'addButton',
        'methodParams': [],
        'methodReturns': [],
      },
      {
        'methodName': 'getHero',
        'methodParams': [],
        'methodReturns': [],
      }
    ];

    super(interfaceDefition);

  }
}

module.exports = BuilderInterface;
