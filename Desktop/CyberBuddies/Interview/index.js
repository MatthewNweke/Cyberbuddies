const menu = document.querySelector(".toggler");
const headerLinks = document.querySelector(".header-right_symbols");
const mainContent = document.querySelector(".main_content aside + div")
console.log(mainContent)

menu.addEventListener("click", function () {
  headerLinks.classList.toggle("addDropdown");
});


  const sidebar = document.querySelector(".sidebar");
  const sidebarToggleButton = document.querySelector(".sidebar_menubar");
  const headerToggleButton = document.querySelector(".toggler");
  const aside = document.querySelector('aside ul');

  sidebarToggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
aside.classList.toggle('active');
mainContent.classList.toggle("removeContent")


  });

  