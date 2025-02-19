const navDialog = document.querySelector("#nav-dialog");

function toggleMenu() {
  navDialog.classList.toggle("active");

  // Show/hide hamburger button
  if (navDialog.classList.contains("active")) {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "flex";
  }
}
