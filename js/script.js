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
            top : 0,
            behavior : "smooth",
        })
    }

});

// trips date
const outDateTrips = document.querySelectorAll(".trips_date>span");
const showDate = new Date();
outDateTrips.forEach(element => {
    element.innerText = showDate.toDateString();
});

console.log(showDate.toDateString());