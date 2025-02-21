function toggleMenu() {
  const navDialog = document.querySelector("#nav-dialog");
  if (navDialog) {
    navDialog.classList.toggle("active");
  }
}

// Infinite Logo Slider
document.addEventListener("DOMContentLoaded", function () {
  const logosSlider = document.querySelector(".logos-slider");
  const logos = document.querySelectorAll(".logo");

  // Duplicate the logos
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    logosSlider.appendChild(clone);
  });

  // Adjust animation duration based on the number of logos
  const logoCount = logos.length;
  const duration = logoCount * 2;
  logosSlider.style.animationDuration = `${duration}s`;

  // Pause animation on mouse hover
  logosSlider.addEventListener("mouseenter", function () {
    logosSlider.style.animationPlayState = "paused";
  });

  // Resume animation on mouse leave
  logosSlider.addEventListener("mouseleave", function () {
    logosSlider.style.animationPlayState = "running";
  });
});

// Carousel slider
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("works-gallery");
  const nextButtons = document.querySelectorAll("#next-button");
  const prevButtons = document.querySelectorAll("#prev-button");

  // width of a single card
  function getCardWidth() {
    const card = document.querySelector(".card-item");
    return card ? card.offsetWidth + 10 : 300;
  }

  // handle scrolling function
  function scrollGallery(direction) {
    const cardWidth = getCardWidth();
    gallery.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => scrollGallery(1));
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => scrollGallery(-1));
  });
});

// Faq Section
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-question.active").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        const otherArrow = otherItem.querySelector(".arrow");
        otherArrow.classList.remove("rotate");
        const otherAnswer = otherItem.nextElementSibling;
        otherAnswer.style.display = "none";
      }
    });

    item.classList.toggle("active");
    const arrow = item.querySelector(".arrow");
    arrow.classList.toggle("rotate");

    let answer = item.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
