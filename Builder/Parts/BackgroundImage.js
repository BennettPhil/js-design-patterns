const Div = require('./Div.js');

class BackgroundImage extends Div {
  constructor(imageUrl) {
    super();
    this.class = 'background-image';
    this.imageUrl = imageUrl;
  }

  generate() {
    return `<div class="${this.class}" style="background-image: url('${this.imageUrl}');"></div>`;
  }
}

module.exports = BackgroundImage;
