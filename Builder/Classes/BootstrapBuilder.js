const BuilderInterface = require('./BuilderInterface.js');

class BootstrapBuilder extends BuilderInterface {
  createHero() {
    return 'createHero';
  }

  addBackgroundImage($imageUrl) {
    return 'addBackgroundImage';
  }
}

module.exports = BootstrapBuilder;
