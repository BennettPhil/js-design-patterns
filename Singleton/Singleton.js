class Singleton {
  constructor() {
    this.instance = null;
  }

  getInstance() {
    if (!this.instance) {
      this.instance = this.creatIntance();
    }
    return this.instance;
  }

  creatIntance() {
    return {
      string: 'I am the one and only',
    };
  }
}

module.exports = new Singleton;
