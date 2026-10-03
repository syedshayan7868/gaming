/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1000);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* CLOSE MENU */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   COUNTER
========================= */

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            target / 80;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.innerText =
                    Math.floor(current);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    target + "+";

            }

        };

        updateCounter();

    });

}


const heroStats =
document.querySelector(".hero-stats");


const counterObserver =
new IntersectionObserver(
    entries => {

        if (entries[0].isIntersecting) {

            startCounters();

            counterObserver.disconnect();

        }

    }
);


counterObserver.observe(heroStats);


/* =========================
   GAME FILTER
========================= */

const filters =
document.querySelectorAll(".filter");

const gameCards =
document.querySelectorAll(".game-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;

        gameCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(.8)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);

            }

        });

    });

});


/* =========================
   HEART BUTTON
========================= */

const hearts =
document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        const icon =
            heart.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        if (icon.classList.contains("fa-solid")) {

            heart.style.color = "#ff2bd6";
            heart.style.borderColor = "#ff2bd6";

        } else {

            heart.style.color = "white";
            heart.style.borderColor =
                "rgba(255,255,255,.08)";

        }

    });

});


/* =========================
   PLAY BUTTON
========================= */

const playButtons =
document.querySelectorAll(".play-btn");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerText = "LOADING...";

        setTimeout(() => {

            button.innerText = "PLAY NOW";

            alert(
                "Game preview is ready! 🎮"
            );

        }, 700);

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Message sent successfully! 🎮"
        );

        contactForm.reset();

    }
);


/* =========================
   SEARCH BUTTON
========================= */

const searchBtn =
document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

    const search =
        prompt("Search your favorite game:");

    if (search) {

        alert(
            `Searching for "${search}"...`
        );

    }

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(4,5,10,.95)";

    } else {

        header.style.background =
            "rgba(6,7,13,.75)";

    }

});