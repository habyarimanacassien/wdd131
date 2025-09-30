// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastmodified").textContent = document.lastModified;

// Hamburger menu functionality
const menuButton = document.getElementById("menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Change hamburger symbol to X when menu is open
  if (navMenu.classList.contains("show")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Busan Korea Temple",
    location: "Busan, South Korea",
    dedicated: "2022, October, 2",
    area: 90000,
    imageUrl: "https://live.staticflickr.com/65535/49024408728_121e252d52_b.jpg"
  },
  {
    templeName: "Kona Hawaii Temple",
    location: "Kailua Kona, Hawaii",
    dedicated: "1998, May, 7",
    area: 12325,
    imageUrl: "https://live.staticflickr.com/5341/8902834817_b8e4d0bce2_b.jpg" 
  },
  {
    templeName: "Stockholm Sweden Temple",
    location: "Stochkolm, Sweden",
    dedicated: "1985, July, 2",
    area: 31000,
    imageUrl: "https://live.staticflickr.com/7151/13897547741_2ce7efc010_b.jpg"
  }
];

// Function to create temple card
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';
  
  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy'; // Lazy loading
  
  const infoDiv = document.createElement('div');
  infoDiv.className = 'temple-info';
  
  const name = document.createElement('h3');
  name.textContent = temple.templeName;
  
  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  
  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  
  infoDiv.appendChild(name);
  infoDiv.appendChild(location);
  infoDiv.appendChild(dedicated);
  infoDiv.appendChild(area);
  
  card.appendChild(infoDiv);
    card.appendChild(img);
  
  return card;
}

// Function to display temples
function displayTemples(filteredTemples) {
  const container = document.getElementById('temple-container');
  // Clear existing content except the h2
  const h2 = container.querySelector('h2');
  container.innerHTML = '';
  container.appendChild(h2);
  
  // Add temple cards
  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Filter functions
function filterOldTemples() {
  return temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
}

function filterNewTemples() {
  return temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
  });
}

function filterLargeTemples() {
  return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
  return temples.filter(temple => temple.area < 10000);
}

// Navigation event handlers
document.getElementById('home-link').addEventListener('click', () => {
  updateActiveLink('home-link');
  document.querySelector('h2').textContent = 'Temple Gallery - Home';
  displayTemples(temples);
});

document.getElementById('old-link').addEventListener('click', () => {
  updateActiveLink('old-link');
  document.querySelector('h2').textContent = 'Old Temples (Before 1900)';
  displayTemples(filterOldTemples());
});

document.getElementById('new-link').addEventListener('click', () => {
  updateActiveLink('new-link');
  document.querySelector('h2').textContent = 'New Temples (After 2000)';
  displayTemples(filterNewTemples());
});

document.getElementById('large-link').addEventListener('click', () => {
  updateActiveLink('large-link');
  document.querySelector('h2').textContent = 'Large Temples (>90,000 sq ft)';
  displayTemples(filterLargeTemples());
});

document.getElementById('small-link').addEventListener('click', () => {
  updateActiveLink('small-link');
  document.querySelector('h2').textContent = 'Small Temples (<10,000 sq ft)';
  displayTemples(filterSmallTemples());
});

// Function to update active link
function updateActiveLink(activeId) {
  const links = document.querySelectorAll('.nav-menu a');
  links.forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById(activeId).classList.add('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 800) {
      navMenu.classList.remove('show');
      menuButton.textContent = '☰';
    }
  });
});

// Initial display of all temples
displayTemples(temples);