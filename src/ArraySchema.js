export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    const isTrue = (validator) => validator(value) === true;
    return this.validators.every(isTrue);
  }
}
