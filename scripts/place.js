// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Static values
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windspeed = parseFloat(document.getElementById("windspeed").textContent);

// Wind chill formula (Celsius + km/h)
function calculateWindChill(t, s) {
  return (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1);
}

// Only calculate if conditions are valid
let windchill = "N/A";
if (temperature <= 10 && windspeed > 4.8) {
  windchill = calculateWindChill(temperature, windspeed) + " °C";
}

document.getElementById("windchill").textContent = windchill;
