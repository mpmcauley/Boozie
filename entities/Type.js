class Type {
  constructor(type) {
    this.type = type;
  };

  mustBeInteger = (message, location) => {
    return this.mustBeCompatibleWith(Type.INT, message);
  };
  mustBeBoolean = (message, location) => {
    return this.mustBeCompatibleWith(Type.BOOL, message);
  };
  mustBeCompatibleWith = (otherType, message, location) => {
    if (!this.isCompatibleWith(otherType)) {
      return error(message, location);
    }
  };
  mustBeMutuallyCompatibleWith = (otherType, message, location) => {
    if (!(this.isCompatibleWith(otherType || otherType.isCompatibleWith(this)))) {
      return error(message, location);
    }
  };
  isCompatibleWith = (otherType) => {
    return this === otherType || this === Type.ARBITRARY || otherType === Type.ARBITRARY;
  };
  toString() {
    return (this.type);
  };
}

module.exports = Type;
