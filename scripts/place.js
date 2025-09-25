// Footer year and last modified
document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const currentYearElement = document.getElementById("currentyear")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Set last modified date with better formatting
  const lastModifiedElement = document.getElementById("lastmodified")
  if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified)
    const formattedDate = lastModified.toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
    })
    lastModifiedElement.textContent = formattedDate
  }

  // Calculate wind chill
  calculateAndDisplayWindChill()
})

function calculateAndDisplayWindChill() {
  // Get temperature and wind speed from the page
  const temperatureElement = document.getElementById("temperature")
  const windSpeedElement = document.getElementById("windSpeed") // Fixed: changed from "windSpeed" to "windspeed"
  const windChillElement = document.getElementById("windChill")

  if (!temperatureElement || !windSpeedElement || !windChillElement) {
    console.error("Required elements not found")
    return
  }

  // Extract numeric values from the elements
  const temperature = parseFloat(temperatureElement.textContent)
  const windSpeed = parseFloat(windSpeedElement.textContent)

  // Calculate wind chill if conditions are met
  let windChill = "N/A"

  if (!isNaN(temperature) && !isNaN(windSpeed)) {
    if (temperature <= 10 && windSpeed > 4.8) {
      windChill = calculateWindChill(temperature, windSpeed) + "°C" // Fixed: proper degree symbol
    } else {
      windChill = "N/A"
    }
  }

  windChillElement.textContent = windChill
}

// Wind chill formula (Celsius + km/h)
// Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
function calculateWindChill(temperature, windSpeed) {
  if (typeof temperature !== "number" || typeof windSpeed !== "number") {
    return "N/A"
  }

  const windChill =
    13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)

  return windChill.toFixed(1)
}

// Add some interactive features
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects for better user experience
  const sections = document.querySelectorAll(".data, .weather")

  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.transition = "transform 0.3s ease"
    })

    section.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})