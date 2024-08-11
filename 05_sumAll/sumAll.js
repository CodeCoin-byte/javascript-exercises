const sumAll = function (num1, num2) {
  let sum = 0;
  const countNum = num1 > num2 ? num1 : num2;
  if (Math.abs(num1) !== num1 || Math.abs(num2) !== num2) {
    return 'ERROR'
  } else if (isNumber(num1) && isNumber(num2) && isInteger(num1) && isInteger(num2)) {
    for (let i = 1; i <= countNum; i++) {
      sum = sum + i;
    }
  } else {
    return 'ERROR';
  }
  return sum;
};

function isNumber(num) {
  return typeof (num) === 'number';
};

function isInteger(num) {
  return Math.floor(num) === num;
}
// Do not edit below this line
module.exports = sumAll;
