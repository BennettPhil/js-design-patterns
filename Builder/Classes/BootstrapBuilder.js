const BuilderInterface = require('./BuilderInterface.js');
const BootstrapHero = require('./Parts/BootstrapHero.js');
const BackgroundImage = require('./Parts/BackgroundImage.js');
const Header = require('./Parts/Header.js');
const BootstrapButton = require('./Parts/BootstrapButton.js');

class BootstrapBuilder extends BuilderInterface {
  constructor() {
    super();
    this.hero = null;
  }
  createHero() {
    this.hero = new BootstrapHero();
  }

  addBackgroundImage(imageUrl) {
    this.hero.children.add(new BackgroundImage(imageUrl));
  }

  addHeader(level, text) {
    this.hero.children.add(new Header(level, text));
  }

  addButton(link, text) {
    this.hero.children.add(new BootstrapButton(link, text));
  }

  getHero() {
    return this.hero.generate();
  }
}

module.exports = BootstrapBuilder;
