const {stringLength, reverseString, calculator, capitalize} = require("./index.js");

// Testing stringLength

describe ('Testing stringLength', () => {
    test('should print : The string is empty', () => {
        //Act
        const result  = stringLength('');
        //Assert
      expect(result).toMatch('The string is empty');
    });
    test('should print : The string is too long', () => {
        //Act
        const result = stringLength('Hello I\'m Muhammed');
        //Asset
      expect(result).toMatch('The string is too long');
    });
    test('Takes a string to equal it\'s length', () => {
        //Act
        const result = stringLength('Muhammed');
        //Assert
        expect(result).toBe(8);
      });
});

// Testing reverse string

test('It takes a string and return it reversed', ()=> {
    //Act
    const result = reverseString('mame');
    //Assert
    expect(result).toMatch('emam');
})

// Testing calculator

describe ('Calculator Testing', ()=> {
    describe ('Testing add', () => {
        test('should print is 15', () => {
          expect(calculator.add(10, 5)).toBe(15);
        });
        test('should print is 10', () => {
          expect(calculator.add(3, 7)).toBe(10);
        });
        test('should print is 3', () => {
          expect(calculator.add(1, 2)).toBe(3);
        });
      });
      
      describe ('Testing subtract', () => {
        test('should print is 5', () => {
          expect(calculator.subtract(7, 2)).toBe(5);
        });
        test('should print is 0', () => {
          expect(calculator.subtract(5, 5)).toBe(0);
        });
        test('should print is 8', () => {
          expect(calculator.subtract(11, 3)).toBe(8);
        });
      });
      
      describe ('Testing divide', () => {
        test('should print is 2', () => {
          expect(calculator.divide(4, 2)).toBe(2);
        });
        test('should print is 44', () => {
          expect(calculator.divide(88, 2)).toBe(44);
        });
        test('should be print is 2', () => {
          expect(calculator.divide(6, 3)).toBe(2);
        });
      });
      
      describe ('Testing multiply', () => {
        test('should print is 100', () => {
          expect(calculator.multiply(10, 10)).toBe(100);
        });
        test('should print is 0', () => {
          expect(calculator.multiply(0, 7)).toBe(0);
        });
        test('should print is 15', () => {
          expect(calculator.multiply(3, 5)).toBe(15);
        });
      });
});

test('should print Moon', () => {
  expect(capitalize('moon')).toMatch('Moon');
});