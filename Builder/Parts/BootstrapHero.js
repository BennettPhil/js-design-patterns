const Div = require('./Div.js');

class BootstrapHero extends Div {
  constructor() {
    super();
    this.class = 'jumbotron';
  }
}

module.exports = BootstrapHero;
