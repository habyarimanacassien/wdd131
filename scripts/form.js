// Product array
const products = [
  { id: "Bag", name: "Bag" },
  { id: "Laptop", name: "Laptop" },
  { id: "Adaptor", name: "Adaptor" },
  { id: "Radio", name: "Radio" },
  { id: "Bicycle", name: "Bicycle" },
]

// Populate product select options
const productSelect = document.getElementById("productName")
if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option")
    option.value = product.id
    option.textContent = product.name
    productSelect.appendChild(option)
  })
}

// Update last modified date in footer
const lastModifiedElement = document.getElementById("lastModified")
if (lastModifiedElement) {
  const lastModified = new Date(document.lastModified)
  lastModifiedElement.textContent = lastModified.toLocaleString()
}

// Review counter for confirmation page
const reviewCountElement = document.getElementById("reviewCount")
if (reviewCountElement) {
  let reviewCount = localStorage.getItem("reviewCount")
  if (!reviewCount) {
    reviewCount = 0
  }
  reviewCount = Number.parseInt(reviewCount) + 1
  localStorage.setItem("reviewCount", reviewCount)
  reviewCountElement.textContent = reviewCount
}
