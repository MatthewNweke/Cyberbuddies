const menu = document.querySelector(".toggler");
const headerLinks = document.querySelector(".header-right_symbols");

menu.addEventListener("click", function () {
  headerLinks.classList.toggle("addDropdown");
});


  const sidebar = document.querySelector(".sidebar");
  const sidebarToggleButton = document.querySelector(".sidebar_menubar");
  const headerToggleButton = document.querySelector(".toggler");

  sidebarToggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });


const toggleMenuBtn = document.querySelector('.toggle-menu');
const menuContent = document.querySelector('.menu_content');

toggleMenuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  menuContent.classList.toggle('active');
});
