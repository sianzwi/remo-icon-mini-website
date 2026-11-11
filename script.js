document.addEventListener("DOMContentLoaded", () => {

    // MOBILE HAMBURGER MENU

    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".navbar");

    if (header && nav) {

        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.type = "button";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = "&#9776;";

        header.insertBefore(menuButton, nav);

        menuButton.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";

        });

        // CLOSE MENU AFTER CLICKING A LINK

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

                menuButton.innerHTML = "&#9776;";

            });

        });

        // CLOSE MENU WHEN CLICKING OUTSIDE

        document.addEventListener("click", event => {

            if (!header.contains(event.target) &&
                nav.classList.contains("open")) {

                nav.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

                menuButton.innerHTML = "&#9776;";

            }

        });

    }


    // CONTACT FORM VALIDATION

    const contactForm = document.getElementById("contactForm");

    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }

            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your form has been completed successfully.";

            }

            contactForm.reset();

        });


        // RESET FORM MESSAGE

        contactForm.addEventListener("reset", () => {

            if (formMessage) {

                formMessage.textContent = "";

            }

        });

    }

});