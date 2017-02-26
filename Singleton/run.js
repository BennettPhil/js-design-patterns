const Singleton =  require('./Singleton.js');

const firstInstance = Singleton.getInstance();
const secondInstance = Singleton.getInstance();

if (firstInstance === secondInstance) {
  console.log(firstInstance);
}
