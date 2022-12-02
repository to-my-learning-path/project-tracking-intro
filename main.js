var toggleButton = document.querySelector("#toggle-button");
var mainNav = document.querySelector("#mobile-nav");
var openIcon = document.querySelector("#icon-hamburger");
var closeIcon = document.querySelector("#icon-close");

toggleButton.addEventListener("click", () => {
  var isExpanded = toggleButton.getAttribute("aria-expanded");

  if (isExpanded === "false") {
    toggleButton.setAttribute("aria-expanded", !isExpanded);
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    mainNav.classList.toggle("hidden");
  } else {
    toggleButton.setAttribute("aria-expanded", !isExpanded);
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    mainNav.classList.toggle("hidden");
  }
});
