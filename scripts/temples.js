// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear()

// Set last modified date in footer
document.getElementById("lastmodified").textContent = document.lastModified

// Hamburger menu functionality
const menuButton = document.getElementById("menu-button")
const navMenu = document.querySelector(".nav-menu")

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show")

  // Change hamburger symbol to X when menu is open
  if (navMenu.classList.contains("show")) {
    menuButton.textContent = "✕"
  } else {
    menuButton.textContent = "☰"
  }
})
