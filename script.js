const sosBtn = document.getElementById("sosBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

console.log(sosBtn);
console.log(popup);
console.log(closePopup);

if (sosBtn && popup && closePopup) {

    sosBtn.onclick = function () {
        popup.style.display = "flex";
    };

    closePopup.onclick = function () {
        popup.style.display = "none";
    };

    window.onclick = function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    };

}

/* ===============================
   Explore Button Popup
================================ */

const exploreBtn = document.querySelector(".btn1");

if (exploreBtn) {
    exploreBtn.onclick = function () {
        alert("🌸 Welcome to SheShield!\n\nExplore women's safety tips, emergency support, and awareness resources.");
    };
}

/* ===============================
   Contact Form Popup
================================ */

const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Thank you for contacting SheShield!\n\nYour message has been received successfully.");

        contactForm.reset();
    });
}

/* ===============================
   Navigation Menu
================================ */

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        const text = this.textContent;

        setTimeout(() => {

            if (text === "Home") {
                alert("🏠 Welcome to the Home section!");
            }

            else if (text === "About") {
                alert("💜 Learn about SheShield's mission to empower women.");
            }

            else if (text === "Safety Tips") {
                alert("🛡 Explore important safety tips to stay protected.");
            }

            else if (text === "Emergency") {
                popup.style.display = "flex";
            }

            else if (text === "Contact") {
                alert("📩 Reach out to Team SheShield anytime.");
            }

        }, 500);

    });

});

/* ===============================
   Mission Cards Popup
================================ */

const missionCards = document.querySelectorAll(".mission-card");

missionCards.forEach(card => {

    card.addEventListener("click", function () {

        const title = this.querySelector("h3").textContent;

        alert("✨ " + title + "\n\n" + this.querySelector("p").textContent);

    });

});

/* ===============================
   Safety Tips Popup
================================ */

const tipCards = document.querySelectorAll(".tip-card");

tipCards.forEach(card => {

    card.addEventListener("click", function () {

        const title = this.querySelector("h3").textContent;

        alert("💡 " + title + "\n\n" + this.querySelector("p").textContent);

    });

});

/* ===============================
   Counter Animation
================================ */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});