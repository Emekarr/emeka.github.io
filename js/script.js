const navTrayCloseButton = document.querySelector(".fa-close");
const navTrayOpenButton = document.querySelector(".fa-chevron-left");
const navTray = document.querySelector(".nav-tray");

const controlNavTray = (add, remove) => {
  navTray.classList.remove(remove);
  navTray.classList.add(add);
};

navTrayOpenButton.addEventListener("click", () => {
  controlNavTray("nav-tray-open", "nav-tray-closed");
});

navTrayCloseButton.addEventListener("click", () => {
  controlNavTray("nav-tray-closed", "nav-tray-open");
});

