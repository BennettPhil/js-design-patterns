class Header {
  constructor(level, text) {
    this.level = level;
    this.text = text;
  }
  generate() {
    return `<h${this.level}>${this.text}</h${this.level}>`;
  }
}

module.exports = Header;
