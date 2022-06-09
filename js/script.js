

// scroll top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 180) {
        document.querySelector(".scroll__top").style.display = "block";
    } else {
        document.querySelector(".scroll__top").style.display = "none";
    }
})

document.body.addEventListener("click", (event) => {

    if (event.target === document.querySelector(".burger")) {
        document.querySelector(".burger").classList.toggle("burger_active");
        document.querySelector(".menu__content").classList.toggle("menu__content_active");
    };

    if (event.target === document.querySelector(".scroll__top")) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

});

// hidden menu & .social__container
document.querySelector(".menu__content").addEventListener("click", () => {
    document.querySelector(".burger").classList.remove("burger_active");
    document.querySelector(".menu__content").classList.remove("menu__content_active");
});

// trips date
const outDateTrips = document.querySelectorAll(".trips_date>span");
const showDate = new Date();

outDateTrips.forEach(element => {
    element.innerText = `${showDate.getDate()}th ${showDate.toDateString().slice(4, 7)}, ${showDate.getFullYear()}`;
});

// navigation__switch__card
const linkCards = document.querySelectorAll(".link__to__cards");
const switchCards = document.querySelectorAll(".cards__hidden");

linkCards.forEach(element => {
    element.dataset.case = String(element.textContent).toLowerCase();

    element.addEventListener("click", () => {
        switchCards.forEach(card => {
            card.classList.add("cards__hidden");
            if(card.dataset.data === element.dataset.case) {
                card.classList.remove("cards__hidden");
            }
        })
    })
});

switchCards[0].classList.remove("cards__hidden");