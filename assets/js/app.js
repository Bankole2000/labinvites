

$(document).ready(function () {
  $('#myTable').DataTable();
  
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      
  });

  
});

//
checkIfLoggedIn = () => {
  const email = localStorage.getItem('labemail');
  const pass = localStorage.getItem('labpass');
}

const addEvent = (id, typeId, venue, singleDay, startDate, endDate="none", features, imageURL) => {

}

const getEvents = (page = 1) => {

}

const updateEvent = (id, typeId, venue, singleDay, startDate, endDate, features, imageURL) => {

}

const deleteEvent = (id) => {

}

const logout = () => {
  
}

singleDateInput = document.querySelector('#single-date');
singleDateInput.addEventListener('keyup', () => {
  console.log(singleDateInput.value, ' Keyup Event');
}); 
singleDateInput.addEventListener('select', () => {
  console.log(singleDateInput.value, ' Select Event');
}); 
singleDateInput.addEventListener('change', () => {
  console.log(singleDateInput.value, ' Change Event');
}); 
