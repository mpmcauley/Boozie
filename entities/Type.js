const error = require('../error.js');

class Type {
  constructor(type) {
    this.type = type;
  }

  mustBeNumber(message, location) {
    return this.mustBeCompatibleWith(Type.FLOAT, message);
  }
  mustBeBoolean(message, location) {
    return this.mustBeCompatibleWith(Type.BOOL, message);
  }
  mustBeCompatibleWith(otherType, message, location) {
    if (!this.isCompatibleWith(otherType)) {
      return error(message, location);
    }
  }
  mustBeMutuallyCompatibleWith(otherType, message, location) {
    if (!(this.isCompatibleWith(otherType || otherType.isCompatibleWith(this)))) {
      return error(message, location);
    }
  }
  isCompatibleWith(otherType) {
    return this === otherType || this === Type.ARBITRARY || otherType === Type.ARBITRARY;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Type ${this.type})`);
  }
}

// Type.NUMBER

module.exports = Type;
