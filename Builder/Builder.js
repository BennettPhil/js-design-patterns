const BootstrapBuilder = require('./Classes/BootstrapBuilder.js');

const Bootstrap = new BootstrapBuilder();

const Director = require('./Classes/Director.js');

const HeroDirector = new Director();

/* eslint-disable no-console */
console.log(HeroDirector.build(Bootstrap));

