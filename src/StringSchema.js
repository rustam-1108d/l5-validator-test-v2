export default class StringSchema {
  validators = [(value) => typeof value === 'string'];

  isValid(value) {
    const isTrue = (validator) => validator(value) === true;
    return this.validators.every(isTrue);
  }

  startsFromUpperCase() {
    const validator = (string) => {
      if (string === '') {
        return false;
      }

      if (string[0] === string[0].toUpperCase()
      && string[0] !== string[0].toLowerCase()
      && string.length >= 1) {
        return true;
      }

      return false;
    };
    this.validators.push(validator);
    return this;
  }

  length(number) {
    const validator = (string) => (string.length === number);
    this.validators.push(validator);
    return this;
  }

  hasExclamation() {
    const validator = (string) => string.includes('!');
    this.validators.push(validator);
    return this;
  }
}
