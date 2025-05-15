document.addEventListener("DOMContentLoaded", () => {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split("/").pop()
    const navLinks = document.querySelectorAll("nav ul li a")

    navLinks.forEach((link) => {
        const linkHref = link.getAttribute("href")
        if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add("active")
        } else {
            link.classList.remove("active")
        }
    })

    // Mobile navigation toggle (for smaller screens)
    const createMobileNav = () => {
        const header = document.querySelector("header")
        const nav = document.querySelector("nav")

        if (window.innerWidth <= 768 && !document.querySelector(".mobile-nav-toggle")) {
            const mobileNavToggle = document.createElement("button")
            mobileNavToggle.className = "mobile-nav-toggle"
            mobileNavToggle.innerHTML = "<span></span><span></span><span></span>"
            header.querySelector(".container").insertBefore(mobileNavToggle, nav)

            nav.classList.add("mobile-nav")

            mobileNavToggle.addEventListener("click", function () {
                this.classList.toggle("active")
                nav.classList.toggle("active")
            })

            // Close mobile nav when clicking outside
            document.addEventListener("click", (event) => {
                if (!nav.contains(event.target) && !mobileNavToggle.contains(event.target)) {
                    mobileNavToggle.classList.remove("active")
                    nav.classList.remove("active")
                }
            })
        }
    }

    // Call on load
    createMobileNav()

    // Call on resize
    window.addEventListener("resize", createMobileNav)

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })
})
