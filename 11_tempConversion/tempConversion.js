const convertToCelsius = function(Fahrenheit) {
  const fahrenheitInCelsius = (Fahrenheit - 32) * (5/9);
  const roundedFahrenheitInCelsius = Math.round(fahrenheitInCelsius * 10) / 10;
  const fixedRoundedFahrenheitInCelsius = parseFloat(roundedFahrenheitInCelsius.toFixed(1));
  
  return fixedRoundedFahrenheitInCelsius;
};

const convertToFahrenheit = function convertToFahrenheit(temperatureInCelsius) {
  const celsiusInFahrenheit = (temperatureInCelsius * (9/5)) + 32;
  const roundedCelsiusInFahrenheit = Math.round(celsiusInFahrenheit * 10) / 10;
  const fixedRoundedCelsiusInFahrenheit = parseFloat(roundedCelsiusInFahrenheit.toFixed(1));
 
  return fixedRoundedCelsiusInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
