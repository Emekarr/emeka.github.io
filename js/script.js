const nav_tray = document.querySelector(".nav-tray-modal");
const open_menu = document.querySelector(".fa-bars");
const close_menu = document.querySelector(".fa-close");

// When the user clicks on the button, open the nav_tray
open_menu.onclick = function() {
  nav_tray.style.display = "block";
}

// When the user clicks on the button, close the nav_tray
close_menu.onclick = function() {
  nav_tray.style.display = "none";
}

// When the user clicks anywhere outside of the nav_tray, close it
window.onclick = function(event) {
  if (event.target == nav_tray) {
    nav_tray.style.display = "none";
  }
}

