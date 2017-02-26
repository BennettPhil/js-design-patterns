const FoundationButtonPrototype = require('./Classes/FoundationButtonPrototype');

let startTime = Date.now();

const FoundationButton = new FoundationButtonPrototype('pink', 'Click Me');

console.log(FoundationButton.display());
console.log(`Time to create new: ${(Date.now() - startTime)}`);

startTime = Date.now();

let FoundationButtonSecond = new FoundationButtonPrototype('blue', 'Click Me');

console.log(FoundationButtonSecond.display());
console.log(`Time to create second new: ${(Date.now() - startTime)}`);

startTime = Date.now();

const FoundationButtonClone = FoundationButton.clone();

console.log(FoundationButtonClone.display());
console.log(`Time to clone: ${(Date.now() - startTime)}`);


// Test with calling 1000 new objects.
startTime = Date.now();

for (let i = 0; i < 1000000; i += 1) {
  FoundationButtonSecond = new FoundationButtonPrototype('blue', 'Click Me');
  FoundationButtonSecond.display();
}

console.log(`Time to create 1,000,000 New calls: ${(Date.now() - startTime)}`);

// Test with calling 1000 clones.
startTime = Date.now();

for (let i = 0; i < 1000000; i += 1) {
  FoundationButtonSecond = FoundationButton.clone();
  FoundationButtonSecond.display();
}

console.log(`Time to create 1,000,000 clones (with Object.assign()) : ${(Date.now() - startTime)}`);


// Test with calling 1000 clones.
startTime = Date.now();

for (let i = 0; i < 1000000; i += 1) {
  FoundationButtonSecond = FoundationButton.directClone();
  FoundationButtonSecond.display();
}

console.log(`Time to create 1,000,000 clones (without Object.assign()) : ${(Date.now() - startTime)}`);
