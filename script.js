document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const mobileButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const revealItems = document.querySelectorAll("[data-reveal]");
    const form = document.querySelector("#quoteForm");

    const closeMenu = () => {
        if (!navLinks || !mobileButton) {
            return;
        }

        navLinks.classList.remove("active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    if (mobileButton && navLinks) {
        mobileButton.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("active");
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

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18 }
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = form.querySelector("#name")?.value.trim() || "";
            const phone = form.querySelector("#phone")?.value.trim() || "";
            const serviceType = form.querySelector("#serviceType")?.value.trim() || "";
            const suburb = form.querySelector("#suburb")?.value.trim() || "";
            const message = form.querySelector("#message")?.value.trim() || "";

            const subject = encodeURIComponent(`[North Lakes Home & Commercial Cleaning] ${serviceType || "Cleaning enquiry"}`);
            const body = encodeURIComponent(
                [
                    `Name: ${name}`,
                    `Phone: ${phone}`,
                    `Service type: ${serviceType}`,
                    `Suburb: ${suburb}`,
                    "",
                    "Job details",
                    message || "-"
                ].join("\n")
            );

            window.location.href = `mailto:info@clearvue.com.au?subject=${subject}&body=${body}`;
        });
    }
});
