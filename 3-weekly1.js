//fungsi konversi celcius ke farenheit
function CelciusToFarenheit(celcius) {
  let farenheit = (celcius * 9) / 5 + 32;
  return `${celcius}C = ${farenheit}F`;
}

//fungsi konversi farenheit ke celcius
function FarenheitToCelcius(farenheit) {
  let celcius = ((farenheit - 32) * 5) / 9;
  return `${farenheit}F = ${celcius}C`;
}

console.log(CelciusToFarenheit(100));
console.log(FarenheitToCelcius(20));
