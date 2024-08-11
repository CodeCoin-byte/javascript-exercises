const convertToCelsius = function(temperature) {
  const calcCelsius = (t) => (t - 32) * (5 / 9);
  return roundingDecimal(calcCelsius(temperature));
};

const convertToFahrenheit = function(temperature) {
  const calcFahrenheit = (t) => (t * (9 / 5) + 32);
  return roundingDecimal(calcFahrenheit(temperature));
};

function roundingDecimal(n) {
  return Math.round(n * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
