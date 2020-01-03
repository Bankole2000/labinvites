// UI Elements
const selectEventInput = document.querySelector("#event-select")
const senderEmailInput = document.querySelector("#sender")
const singleInviteTabLnk = document.querySelector("a[href='#single-invite']")
const multipleInviteTabLnk = document.querySelector("a[href='#multple-invite']")
const singleToEmailInput = document.querySelector('#single-to-email-input')
const singleCCEmailInput = document.querySelector('#single-cc-email-input')
const singleBCCEmailInput = document.querySelector('#single-bcc-email-input')
const multipleToEmailInput = document.querySelector('#multiple-to-email-input')
const multipleCCEmailInput = document.querySelector('#multiple-cc-email-input')
const multipleBCCEmailInput = document.querySelector('#multple-bcc-email-input')
const inviteNotesInput = document.querySelector('#invite-notes')
const sendInviteBtn = document.querySelector('#send-invite-button')
const clearFormBtn = document.querySelector('#clear-form-button')

// Functions
const getEventList = () => {
  let action = "getEventList";
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
          console.log(data);
          data.data.forEach(eventItem => {
            let option = document.createElement('option');
            option.id = eventItem.event_id;
            option.value = eventItem.event_id;
            option.innerHTML = eventItem.title;
            selectEventInput.appendChild(option);             
          });
          // updateUI(data);
        }
        else if(data.message === "failed"){
          M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
        }
    },
    
    error: function(){
      M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
    },
    timeout: timeout
  })
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
         updateEventPreview(data);
        }
         else if(data.message === "failed"){
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

const updateEventPreview = (event) => {
  document.querySelector('#event-title').innerHTML = event.title;
  document.querySelector('#event-type-name').innerHTML = event.type_name ;
  document.querySelector('#event-image').setAttribute('src', event.image_url) ;
  document.querySelector('#event-date').innerHTML = event.from_date;
  document.querySelector('#event-venue').innerHTML = event.venue;
}

const getEventInvites = (eventId) => {
  let action = "getInvites";
}

const sendSingleInvite = (invite) => {
  let action = "sendSingleInvite";
}

const sendMultipleInvites = (invite) => {

}

// Events
// On page Load
getEventList();

// ON Select button change
selectEventInput.addEventListener('change', e => {
  console.log(selectEventInput.value);
  let eventId = selectEventInput.value;
  getEventDetails(eventId);
})