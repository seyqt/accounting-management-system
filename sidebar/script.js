const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');


toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
});


const employeesMenu = document.getElementById('employeesMenu');
const employeesSubmenu = document.getElementById('employeesSubmenu');

employeesMenu.addEventListener('click', () => {
  employeesSubmenu.classList.toggle('open');
  employeesMenu.classList.toggle('open');
});


const attendanceMenu = document.getElementById('attendanceMenu');
const attendanceSubmenu = document.getElementById('attendanceSubmenu');

attendanceMenu.addEventListener('click', () => {
  attendanceSubmenu.classList.toggle('open');
  attendanceMenu.classList.toggle('open');
});
