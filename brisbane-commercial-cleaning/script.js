document.addEventListener("DOMContentLoaded", () => {
    // Add js-enabled class to HTML element for motion styling
    document.documentElement.classList.add("js-enabled");

    const navbar = document.querySelector(".navbar");
    const mobileButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const form = document.querySelector("#quoteForm");
    const revealItems = document.querySelectorAll(".reveal-item");

    const closeMenu = () => {
        if (!navLinks || !mobileButton) {
            return;
        }

        navLinks.classList.remove("is-active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    if (mobileButton && navLinks) {
        mobileButton.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("is-active");
            mobileButton.setAttribute("aria-expanded", String(isActive));
            mobileButton.innerHTML = isActive
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    window.addEventListener("scroll", () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    });

    // Scroll Reveal Intersection Observer
    if (revealItems.length > 0) {
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            });

            revealItems.forEach((item) => observer.observe(item));
        } else {
            revealItems.forEach((item) => item.classList.add("is-visible"));
        }
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = form.querySelector("#name")?.value.trim() || "";
            const email = form.querySelector("#email")?.value.trim() || "";
            const phone = form.querySelector("#phone")?.value.trim() || "";

            const subject = encodeURIComponent(`[Brisbane Commercial Cleaning] Custom Quote Request`);
            const body = encodeURIComponent(
                [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Phone: ${phone}`,
                    "",
                    "Please get back to me with a custom quote for commercial cleaning services."
                ].join("\n")
            );

            window.location.href = `mailto:goodmanseo.sydney@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
