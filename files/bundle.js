function toggleNavbar() {
  const openButton = document.getElementById("navbar-control-open");
  const closeButton = document.getElementById("navbar-control-close");
  const container = document.querySelector(".navbar-items-container");

  openButton.classList.toggle("navbar-sm-closed");
  closeButton.classList.toggle("navbar-sm-closed");
  container.classList.toggle("navbar-sm-closed");
}
