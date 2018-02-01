const calculator = () => {
  const add = (numberOne, numberTwo) => numberOne + numberTwo;
  const subtract = (numberOne, numberTwo) => numberOne - numberTwo;
  const multiply = (numberOne, numberTwo) => numberOne * numberTwo;
  const divide = (numberOne, numberTwo) => {
    if (numberTwo === 0) throw new Error('Cannot divide by zero');
    return numberOne / numberTwo;
  }
  return {add, subtract, divide, multiply}
}

module.exports = calculator;