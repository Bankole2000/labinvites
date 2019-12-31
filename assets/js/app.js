$(document).ready(function () {
  $('#myTable').DataTable();
  
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      
  });

});