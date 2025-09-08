// Get current year for copyright
const currentYear = new Date().getFullYear()
document.getElementById("currentyear").textContent = currentYear

// Get last modified date
const lastModified = document.lastModified
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`
