// UI Elements
const selectEventInput = document.querySelector("#event-selet")
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
}

const getEventDetails = (eventId) => {
  let action = "getSingleEvent";
}

const updateEventPreview = (event) => {

}

const getEventInvites = (eventId) => {
  let action = "getInvites";
}

const sendSingleInvite = (invite) => {
  let action = "sendSingleInvite";
}

const sendMultipleInvites = (invite) => {

}

const logout = () => {
  localStorage.removeItem('labemail');
  localStorage.removeItem('labpass');
  localStorage.removeItem('labid');
  M.toast({html: `Loggin out &nbsp; ${loadingIcon}`, completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
}



// Events