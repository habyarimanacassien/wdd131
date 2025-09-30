import { useEffect } from "react"
import "./lazy-loading.css"

export default function LazyLoadingDemo() {
  useEffect(() => {
    // Function to update the last modified date
    function updateLastModified() {
      const lastModifiedElement = document.getElementById("lastModified")

      if (lastModifiedElement) {
        // Get the current date since document.lastModified doesn't work in Next.js
        const lastModified = new Date()

        // Format options for the date
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }

        // Format and display the date
        const formattedDate = lastModified.toLocaleDateString("en-US", options)
        lastModifiedElement.textContent = formattedDate
      }
    }

    // Function to add intersection observer for better lazy loading feedback
    function observeImages() {
      // Check if Intersection Observer is supported
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement

                // Add a class when image comes into view
                img.classList.add("in-view")

                // Optional: Log when images come into view (for development/testing)
                console.log(`Image loaded: ${img.alt}`)

                // Stop observing this image
                observer.unobserve(img)
              }
            })
          },
          {
            // Start loading when image is 100px away from viewport
            rootMargin: "100px",
            threshold: 0.1,
          },
        )

        // Observe all lazy-loaded images
        const lazyImages = document.querySelectorAll('img[loading="lazy"]')
        lazyImages.forEach((img) => imageObserver.observe(img))
      }
    }

    // Function to add a scroll indicator
    function addScrollIndicator() {
      const scrollIndicator = document.createElement("div")
      scrollIndicator.id = "scroll-indicator"
      scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #3498db, #2ecc71);
        z-index: 1000;
        transition: width 0.1s ease;
      `
      document.body.appendChild(scrollIndicator)

      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = (scrollTop / scrollHeight) * 100
        scrollIndicator.style.width = `${scrollPercent}%`
      }

      window.addEventListener("scroll", handleScroll)

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll)
        if (scrollIndicator.parentNode) {
          scrollIndicator.parentNode.removeChild(scrollIndicator)
        }
      }
    }

    // Initialize everything
    updateLastModified()
    observeImages()
    const cleanupScrollIndicator = addScrollIndicator()

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    console.log("Lazy loading demo initialized successfully!")

    // Cleanup function
    return () => {
      if (cleanupScrollIndicator) {
        cleanupScrollIndicator()
      }
    }
  }, [])

  return (
    <>
      <main className="lazy-loading-main">
        <h1>Lazy Loading Images Demo</h1>

        <img
          src="/images/jordan-river-temple.jpg"
          alt="Beautiful landscape with mountains and lake"
          loading="lazy"
          width={400}
          height={600}
        />

        <img
          src="/images/manti-temple.jpeg"
          alt="Urban cityscape with tall buildings at sunset"
          loading="lazy"
          width={400}
          height={600}
        />

        <img
          src="/images/mesa-temple.jpeg"
          alt="Forest path winding through tall trees"
          loading="lazy"
          width={400}
          height={600}
        />

        <img
          src="/images/profile-photo.jpg"
          alt="Ocean waves crashing against rocky coastline"
          loading="lazy"
          width={400}
          height={600}
        />

        <img
          src="/images/rwanda-medium.webp"
          alt="Desert landscape with sand dunes and cacti"
          loading="lazy"
          width={400}
          height={600}
        />

        <img
          src="/images/oakland-temple.jpeg"
          alt="Snow-covered mountain peaks under clear blue sky"
          loading="lazy"
          width={400}
          height={600}
        />
      </main>

      <footer className="lazy-loading-footer">
        <p>
          &copy; 2025 Lazy Loading Demo | Last Modified: <span id="lastModified"></span>
        </p>
      </footer>
    </>
  )
}
