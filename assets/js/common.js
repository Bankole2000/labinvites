const emailRegex = /^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const passRegex = /^[0-9a-zA-Z$&!@#%^*(){}"'\[\];:<>/\\?+=_.-\|]{8,}$/i ; 
const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
const textRegex = /^[A-Za-z\d\s,.]{3,}$/;
const textAreaRegex = /^[A-Za-z\d\s,.!@#$%^&*(){}"'\[\]\\\/+=?_-\|;:]{3,}$/;
const datetimeRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d/;
const nameRegex = /^[a-z]{3,}$/i;
const failIcon = '<i class="mdi mdi-close-circle" style="color: red;"></i>';
const successIcon = '<i class="mdi mdi-check-circle" style="color: green;"></i>';
const loadingIcon =  '<i class="fa fa-spinner fa-pulse"></i>';
const logoutBtn = document.body.contains(document.querySelector('#logout')) ? document.querySelector('#logout') : false;
const userImageEl = document.querySelectorAll('.usergravatar')
const userNameSpan = document.querySelectorAll('.username')

const timeout = 5000;

const allInputs = document.querySelectorAll('input[type=text], input[type=email], input[type=password], input[type=date], input[type=datetime-local], input[type=url], textarea[type=textarea]');


const homepath = ['/','/index.html','/index','/projects/labinvites/','/projects/labinvites/index.html']

const updateUI = (userData) => {
  console.log(userData);
  console.log(userData.gravatar);
  userNameSpan.forEach(el => {
    el.innerHTML = userData.firstname;
  });
  userImageEl.forEach(el => {
    el.setAttribute('src', `https://www.gravatar.com/avatar/${userData.gravatar}`);
  });
  // window.location.pathname == 'events.html' ? getEvents() : false;
  // window.location.pathname == 'events.html' ? getEventTypes() : false;
}

const getDetails = (email, pass) => {
  let action = "newLogin";

  $.ajax({
    url: "scripts/login.php",
    method: "POST",
    data: {
    action: action,
    email: email,
    pass: pass
      }, 
    dataType: "JSON",
    success: function(data){
        console.log(data);
        if(data.message === "success"){
          updateUI(data);
        }
        // M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
        else if(data.message === "failed"){
          M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
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

const checkIfLoggedIn = () => {
  const email = localStorage.getItem('labemail');
  const pass = localStorage.getItem('labpass');
  email && pass ? getDetails(email, pass) : M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000});
}

// window.location.pathname == '/' || window.location.pathname == '/index' ? console.log("Home") : console.log("Inside");

if( logoutBtn ) {  
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    logout();
  });
}

const markAsValid = (field) => {
  field.classList.add("has-success");
  field.classList.remove("has-danger");
  // $(`label[for=${field.id}]`).css({
  //   'color': 'green'
  // })
}

const markAsInvalid = (field) => {
  field.classList.remove("has-success");
  field.classList.add("has-danger");
  //   $(`label[for=${field.id}]`).css({
  //   'color': 'red'
  // })
}



const unmark = (field) => {
  field.classList.remove("has-danger");
  field.classList.remove("has-success");
  // $(`label[for=${field.id}]`).css({
  //   'color': 'grey'
  // })
  // $(`span[id=connection-${field.id}]`).html("");
}

const checkEmail = ({target}) => {
  const intent = target.getAttribute('data-intent');
  const value = target.value;
  isValid = email_reg.test(value) ? true : false ;
  isValid ? checkIfRegistered(target) : flagIfInvalid(target, isValid);
  return isValid;
} 

const checkName = ({target}) => {
  const value = target.value;
  isValid = name_reg.test(value) ? true : false;
  flagIfInvalid(target, isValid);
  isValid ? $(`span[id=connection-${target.id}]`).html("is Ok") : $(`span[id=connection-${target.id}]`).html("A-Z only > 3");
  return isValid; 
}

const enableButton = (target, isValid) => {
  target.toggleAttribute('disabled', !isValid);
  !isValid ? target.innerHTML += ` ${loadingIcon}` : target.removeChild(target.childNodes[1]); 
}

const flagIfInvalid = (target, isValid) => {
  isValid ? markAsValid(target.parentElement) : markAsInvalid(target.parentElement);
  return isValid ? target.value : 'undefined';
}

const checkInputIsValidType = (value, type) => {
  let isValid;
  type == 'email' ? isValid = emailRegex.test(value) : false;
  type == 'password' ? isValid = passRegex.test(value) : false;
  type == 'text' ? isValid = textRegex.test(value) : false;
  type == 'textarea' ? isValid = textAreaRegex.test(value) : false;
  type == 'url' ? isValid = urlRegex.test(value) : false;
  type == 'datetime-local' ? isValid = datetimeRegex.test(value) : false;
  return isValid;
}

allInputs.forEach(input => {
  input.addEventListener('focusin', (e) => {
    unmark(e.target.parentElement);
  });
  input.addEventListener('focusout', (e) => {
    isValid = checkInputIsValidType(e.target.value, e.target.getAttribute('type'));
    flagIfInvalid(e.target, isValid)
  })
})

const logout = () => {
  localStorage.removeItem('labemail');
  localStorage.removeItem('labpass');
  localStorage.removeItem('labid');
  M.toast({html: `Loggin out &nbsp; ${loadingIcon}`, completeCallback: () => { window.location.replace("index.html"); }, displayLength: 1000})
}; 

homepath.indexOf(window.location.pathname) >= 0 ? console.log('home') : checkIfLoggedIn();
