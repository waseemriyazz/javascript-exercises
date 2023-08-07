const convertToCelsius = function(tempInFarn) {
  return Math.round((tempInFarn-32) * (5/9)*10)/10 ;
};

const convertToFahrenheit = function(tempInCel) {
  return Math.round((tempInCel*9/5)*10)/10 + 32 ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
