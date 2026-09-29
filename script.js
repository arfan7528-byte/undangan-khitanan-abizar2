/* =================================
   TOMBOL BUKA UNDANGAN + MUSIK
================================= */

const openButton =
  document.getElementById("openButton");

const cover =
  document.getElementById("cover");

const content =
  document.getElementById("content");

const musik =
  document.getElementById("musik");

const musicButton =
  document.getElementById("musicButton");


openButton.addEventListener("click", function () {

  cover.style.display = "none";

  content.classList.remove("hidden");

  musik.play()
    .catch(function(error) {
      console.log("Musik belum dapat dimainkan:", error);
    });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =================================
   TOMBOL MUSIK
================================= */

let musicPlaying = true;

musicButton.addEventListener("click", function () {

  if (musicPlaying) {

    musik.pause();

    musicButton.innerHTML = "🔇";

    musicPlaying = false;

  } else {

    musik.play();

    musicButton.innerHTML = "🎵";

    musicPlaying = true;

  }

});


/* =================================
   COUNTDOWN
================================= */

const targetDate =
  new Date(
    "2026-10-22T08:00:00+07:00"
  ).getTime();


function updateCountdown() {

  const now =
    new Date().getTime();

  const distance =
    targetDate - now;


  if (distance <= 0) {

    document.getElementById("days").innerText = "0";

    document.getElementById("hours").innerText = "0";

    document.getElementById("minutes").innerText = "0";

    document.getElementById("seconds").innerText = "0";

    return;

  }


  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (distance %
      (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );


  const minutes =
    Math.floor(
      (distance %
      (1000 * 60 * 60)) /
      (1000 * 60)
    );


  const seconds =
    Math.floor(
      (distance %
      (1000 * 60)) /
      1000
    );


  document.getElementById("days")
    .innerText = days;

  document.getElementById("hours")
    .innerText = hours;

  document.getElementById("minutes")
    .innerText = minutes;

  document.getElementById("seconds")
    .innerText = seconds;

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =================================
   ANIMASI SAAT SCROLL
================================= */

const reveals =
  document.querySelectorAll(".reveal");


function revealOnScroll() {

  const windowHeight =
    window.innerHeight;


  reveals.forEach(function(element) {

    const elementTop =
      element.getBoundingClientRect().top;


    if (
      elementTop <
      windowHeight - 100
    ) {

      element.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);


revealOnScroll();