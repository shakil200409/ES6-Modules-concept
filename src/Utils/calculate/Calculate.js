const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const divideTheFirstNumberByTheSecondNumber = (n1, n2) => {
  return n1 / n2;
};

/**
 * There are some ways for exporting functions/ data:
 */
// Way-1: Using export default
// export default add ;

// Way-2: Using an object and pass the data like the value of an element of object
// const calculator = {add: add, multiply: multiply};
// export default calculator:

// Way-3: Using Destructuring method to pass the data
export { add, multiply, divideTheFirstNumberByTheSecondNumber };
