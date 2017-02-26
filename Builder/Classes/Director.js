class Director {
  build(builder) {
    builder.createHero();
    builder.addBackgroundImage('http://images.com/image.jpg');
    builder.addHeader(2, 'Some Text');
    builder.addButton('http://link.com', 'Button Text');

    return builder.getHero();
  }
}

module.exports = Director;
