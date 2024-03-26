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

  const sidebarMenubar = document.querySelector('.sidebar_menubar');
  const aside = document.querySelector('aside ul');

  sidebar.addEventListener('click',function(){
aside.classList.toggle('active');
  })

  