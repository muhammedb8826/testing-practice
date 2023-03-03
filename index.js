function stringLength (string) {
if(string.length < 1){
    return 'The string is empty';
}
if(string.length > 10){
    return 'The string is too long'
}
    return string.length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (x, y) => {
      return (x + y);
    },
    subtract: (x, y) => {
      return (x - y);
    },
    divide: (x, y) => {
      return (x / y);
    },
    multiply: (x, y) => {
      return (x * y);
    }
  }

  function capitalize(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

module.exports = {stringLength, reverseString, calculator, capitalize};