const Interface = require('../Common/Classes/Interface.js');

class BuilderInterface extends Interface {
  constructor() {
    const interfaceDefition = [
      {
        methodName: 'createHero',
        methodParams: [],
        methodReturns: [],
      },
      {
        methodName: 'addBackgroundImage',
        methodParams: [
          {
            type: 'String',
            name: 'imageUrl',
          },
        ],
        methodReturns: [
          {
            type: 'String',
            name: 'backgroundImage',
          },
        ],
      },
      {
        methodName: 'addHeader',
        methodParams: [],
        methodReturns: [],
      },
      {
        methodName: 'addButton',
        methodParams: [],
        methodReturns: [],
      },
      {
        methodName: 'getHero',
        methodParams: [],
        methodReturns: [],
      },
    ];

    super(interfaceDefition);
  }
}

module.exports = BuilderInterface;
