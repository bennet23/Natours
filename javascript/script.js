const checkbox = document.querySelector(".navigation__checkbox");

checkbox.addEventListener("click", function () {
  checkbox.classList.toggle("navigation__checkbox--checked");
});

const allLinks = document.querySelectorAll(".navigation__link:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (checkbox.classList.contains("navigation__checkbox--checked")) {
      checkbox.classList.remove("navigation__checkbox--checked");
    }
  });
});
