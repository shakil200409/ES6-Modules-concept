import React from "react";
import {
  add,
  multiply,
  divideTheFirstNumberByTheSecondNumber as divide,
} from "../../Utils/calculate/Calculate";
// import add from "../../Utils/calculate/Calculate";

const sum = add(10, 20);
console.log(sum);

const mult = multiply(5, 10);
console.log(mult);

const half = divide(14, 2);
console.log(half);

const Watch = () => {
  return <div></div>;
};

export default Watch;
