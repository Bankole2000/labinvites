const oldEventTypeRadioInput = document.querySelector('#old-event-type')
const newEventTypeRadioInput = document.querySelector('#new-event-type')
const eventTypeAddForm = document.querySelector('#event-type-add-form')
const eventTypeSelectForm = document.querySelector('#event-type-select');
const eventTypeSelectInput = document.querySelector('#event-type-select-input');
const addNewEventTypeBtn = document.querySelector('#event-type-add-new-button')
const addNewEventTypeInput = document.querySelector('#event-type-add-new')
const eventTitleInput = document.querySelector('#event-title-input')
const eventVenueInput = document.querySelector('#event-venue-input')
const singleDayLnk = document.querySelector("a[href='#single-day']")
const multipleDayLnk = document.querySelector("a[href='#multiple-days']")
const allDateInputs = document.querySelectorAll("input[type='datetime-local']")
const singleDateInput = document.querySelector('#single-date')
const startDateInput = document.querySelector('#startdate')
const endDateInput = document.querySelector('#enddate')
const featuringInput = document.querySelector('#featuring')
const imageUrlInput = document.querySelector('#imageUrl')
const addNewEventBtn = document.querySelector('#add-new-event-submit-btn')
const updateEventModalBtn = document.querySelectorAll('.updateEvent')

const showAddNewType = () => {
  eventTypeAddForm.style.display = 'block';
  eventTypeSelectForm.style.display = 'none';
}

const showSelectType = () => {
  eventTypeAddForm.style.display = 'none';
  eventTypeSelectForm.style.display = 'block';
}

$(window).click((e) => {
  let id;
  if (e.target.type== "radio") {
    console.log(e.target)
    id = e.target.id;
    id == 'old-event-type' ? showSelectType() : false ;
    id == 'new-event-type' ? showAddNewType() : false ;
  }
  if (e.target.classList.contains('updateEvent')) {
    e.preventDefault();
    let eventId = e.target.id;
    console.log(e.target, eventId);
    getEventDetails(eventId);

  }
})


$(document).ready(function () {
  
  
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      
  });

  
});

// Functions
const updateModal = (data) => {
  document.querySelector('.modal-title').innerHTML = 'Update Event';
  eventTypeSelectInput.selectedIndex = data.event_type_id;
  oldEventTypeRadioInput.checked = true;
  data.is_single_day == "1" ? console.log('is Single Day') : console.log('is NOT single Day');
  data.is_single_day == "1" ? singleDayLnk.classList.add('active') : singleDayLnk.classList.remove('active');
  data.is_single_day == "1" ? document.querySelector("#single-day").classList.add('active', 'show') : document.querySelector("#single-day").classList.remove('active', 'show');
  data.is_single_day == "0" ? document.querySelector("#multiple-days").classList.add('active', 'show') : document.querySelector("#multiple-days").classList.remove('active', 'show');
  data.is_single_day == "0" ? multipleDayLnk.classList.add('active') : multipleDayLnk.classList.remove('active');
  eventTitleInput.value = data.title;
  eventVenueInput.value = data.venue;
  featuringInput.value = data.features;
  imageUrlInput.value = data.image_url;
}

const getEventDetails = (eventId) => {
  let action = "getSingleEvent";
  $.ajax({
    url: "scripts/events.php",
    method: "POST",
    data: {
    action,
    eventId
      }, 
    dataType: "JSON",
    success: function(data){
        console.log(data);
        if(data.message === "success"){
          console.log(data);
          updateModal(data);
        }
        // // M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
        else if(data.message === "failed"){
        //   M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
        }
    },
    
    error: function(){
      M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
      // enableButton('signinBtn', true);
      // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
    },
    timeout: timeout
  })
}

// const updateUI = (userData) => {
//   console.log(userData);
//   console.log(userData.gravatar);
//   userNameSpan.forEach(el => {
//     el.innerHTML = userData.firstname;
//   });
//   userImageEl.forEach(el => {
//     el.setAttribute('src', `https://www.gravatar.com/avatar/${userData.gravatar}`);
//   });
//  }



const getEventTypes = () => {
  let action = "getEventType";
  $.ajax({
    url: "scripts/events.php",
    method: "POST",
    data: {
    action: action,
      }, 
    dataType: "JSON",
    success: function(data){
        console.log(data);
        if(data.message === "success"){
          M.toast({html: `${successIcon} &nbsp; Refreshed Event Types`, classes: "success", displayLength: 1000})
          data.data.forEach(type => {
           let option = document.createElement('option');
           option.id = type.event_type_id;
           option.value = type.event_type_id;
           option.innerHTML = type.type_name;
           eventTypeSelectInput.appendChild(option); 
          })
        }
        // M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
        else if(data.message === "failed"){
          M.toast({html: `${errorIcon} &nbsp; Could not get Event types`, classes: "error", displayLength: 1000})
        }
    },
    
    error: function(){
      // M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
      // enableButton('signinBtn', true);
      // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
    },
    timeout: timeout
  })

}

const addEventType = (typeName) => {
  let action = "addEventType";

  $.ajax({
    url: "scripts/events.php",
    method: "POST",
    data: {
    action: action,
    typeName: typeName
      }, 
    dataType: "JSON",
    success: function(data){
        console.log(data);
        if(data.message === "success") {
        M.toast({html: `${successIcon} &nbsp; Added Event Type &nbsp`, classes: "successtoast", completeCallback: () => { getEventTypes(); }, displayLength: 2000 });
        // getEventType();
        } else if(data.message === "failed") {
        M.toast({html: `${errorIcon} &nbsp; Failed to Add Event Type`, classes: "error", displayLength: 2000})
        }
    },
    
    error: function(){
      M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
      // enableButton('signinBtn', true);
      // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
    },
    timeout: timeout
  })
}

// const getDetails = (email, pass) => {
//   let action = "newLogin";

//   $.ajax({
//     url: "scripts/login.php",
//     method: "POST",
//     data: {
//     action: action,
//     email: email,
//     pass: pass
//       }, 
//     dataType: "JSON",
//     success: function(data){
//         console.log(data);
//         if(data.message === "success"){
//           updateUI(data);
//         }
//         // M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
//         else if(data.message === "failed"){
//           M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
//         }
//     },
    
//     error: function(){
//       M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
//       // enableButton('signinBtn', true);
//       // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
//     },
//     timeout: timeout
//   })
// }

// const checkIfLoggedIn = () => {
//   const email = localStorage.getItem('labemail');
//   const pass = localStorage.getItem('labpass');
//   email && pass ? getDetails(email, pass) : M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000});
// }

const addEvent = ({typeId, title, venue, isSingleDay, startDate, endDate, features, imageURL}) => {
  let action = "addEvent";
  isSingleDay ? isSingleDay = 1 : isSingleDay = 0;
  $.ajax({
    url: "scripts/events.php",
    method: "POST",
    data: {
    action,
    typeId, 
    title,
    venue, 
    isSingleDay,
    startDate,
    endDate,
    features,
    imageURL
      }, 
    dataType: "JSON",
    success: function(data){
        console.log(data);
        if(data.message === "success"){
          M.toast({html: `${successIcon} &nbsp; Event Added Successfully &nbsp; - &nbsp; Refreshing ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
      
          //   console.log(data);
        }
        // // M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
        else if(data.message === "failed"){
          M.toast({html: `${failIcon} Couldn't Add Event`, classes: "error", displayLength: 1000})
        }
    },
    
    error: function(){
      // M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
      // enableButton('signinBtn', true);
      // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
    },
    timeout: timeout
  })
}

const deleteEvent = (id) => {
  let action = "deleteEvent";
  $.ajax({
    url: "scripts/events.php",
    method: "POST",
    data: {
      action: action, 
      eventId: id,
    },
    dataType: "JSON",
    success: function(data) {
      console.log(data);
      data.message == "success"? console.log('success') : console.log('error');
    },
    error: function() {
      console.log("error");
    },
    timeout: timeout
  })
}

const resetForm = () => {
  document.querySelector('#eventTotalForm').reset();
  document.querySelector('.modal-title').innerHTML = 'Add New Event';
}

const getEvents = (page = 1) => {
  let action = "getEvents";
  $.ajax({
    url: "scripts/events.php",
    method: "POST",
    data: {
    action: action,
    page: page,
      }, 
    dataType: "JSON",
    success: function(data){
        console.log(data);
        if(data.message === "success"){
          console.log(data.data);
          let eventCards = '';
          data.data.forEach(card => {
            eventCards += 
            `
            <div class="col-md-4">
                <div class="card mb-3">
                  <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <h6 class="card-subtitle text-muted">${card.type_name}</h6>
                  </div>
                  <img style="height: 100%; width: 100%; display: block;" src="${card.image_url}" alt="Card image">
                  <!-- <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div> -->
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Date: ${new Date(card.from_date).toDateString() } </li>
                    <li class="list-group-item">Venue: ${card.venue} </li>
                    
                  </ul>
                  <div class="card-body">
                    <a href="#" id="${card.event_id}" class="btn btn-primary card-link updateEvent" data-toggle="modal" data-target="#exampleModal">Update</a>
                    
                    <a href="#" id="${card.event_id}" onclick="deleteEvent(${card.event_id})" class="btn btn-danger card-link">Delete</a>
                  </div>
                  <div class="card-footer text-muted">
                    Posted 2 days ago
                    <a href="#" id="${card.event_id}" class="btn btn-success card-link">View Invites</a>
                  </div>
                </div>
                
              </div>
            
            `;
          });
          document.querySelector('#events-display-area').innerHTML = eventCards;
        

        //   console.log(data);
        }
        // // M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
        else if(data.message === "failed"){
        //   M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
        }
    },
    
    error: function(){
      M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
      // enableButton('signinBtn', true);
      // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
    },
    timeout: timeout
  })
}

const updateEvent = ({id, typeId, venue, singleDay, startDate, endDate, features, imageURL}) => {

}


// singleDateInput = document.querySelector('#single-date');
singleDateInput.addEventListener('keyup', () => {
  console.log(singleDateInput.value, ' Keyup Event');
}); 
singleDateInput.addEventListener('select', () => {
  console.log(singleDateInput.value, ' Select Event');
}); 
singleDateInput.addEventListener('change', () => {
  console.log(singleDateInput.value, ' Change Event');
}); 

// checkIfLoggedIn();  

// Events 
addNewEventTypeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const typeName = addNewEventTypeInput.value;
  addEventType(typeName);
})

updateEventModalBtn.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    let eventId = button.id;
    console.log(eventId);
  })
})

addNewEventBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let event = {};
  event.typeId = eventTypeSelectInput.value != 0 ? flagIfInvalid(eventTypeSelectInput, true) : flagIfInvalid(eventTypeSelectInput, false);
  event.title = textRegex.test(eventTitleInput.value) ? flagIfInvalid(eventTitleInput, true) : flagIfInvalid(eventTitleInput, false);
  event.venue = textRegex.test(eventVenueInput.value) ? flagIfInvalid(eventVenueInput, true) : flagIfInvalid(eventVenueInput, false);
  event.isSingleDay = singleDayLnk.classList.contains('active') ? true : false;
  event.isSingleDay ? event.startDate = flagIfInvalid(singleDateInput, checkInputIsValidType(singleDateInput.value, 'datetime-local')) : event.startDate = flagIfInvalid(startDateInput, checkInputIsValidType(startDateInput.value, 'datetime-local'));
  event.isSingleDay ? event.endDate = 'undefined' : event.endDate = flagIfInvalid(endDateInput, checkInputIsValidType(endDateInput.value, 'datetime-local'));
  event.features = textAreaRegex.test(featuringInput.value) ? flagIfInvalid(featuringInput, true) : flagIfInvalid(featuringInput, false);
  event.imageURL = urlRegex.test(imageUrlInput.value) ? flagIfInvalid(imageUrlInput, true) : flagIfInvalid(imageUrlInput, false); 
  console.log(event);
  if (event.imageURL != 'undefined' && event.features != 'undefined' && event.startDate != 'undefined' && event.venue != 'undefined' && event.title != 'undefined' && event.typeId != 'undefined' ) {
    event.startDate = new Date(event.startDate).toISOString().slice(0, 19).replace('T', ' ');
    event.endDate != 'undefined' ? event.endDate = new Date(event.endDate).toISOString().slice(0, 19).replace('T', ' ') : event.endDate = 'undefined';
    addEvent(event);
  } else {
    M.toast({html: `${failIcon} Incomplete Event Details`, displayLength: 1000})
  }
})

window.location.pathname.includes('events.html')  ? getEvents() : false;
window.location.pathname.includes('events.html') ? getEventTypes() : false;
