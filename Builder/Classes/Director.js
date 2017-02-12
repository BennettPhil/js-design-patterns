module.exports = class Director {
  build($builder) {
    $builder.createHero();
    $builder.addBackgroundImage();
    $builder.addHeader();
    $builder.addButton();

    return $builder.getHero();
  }
};
