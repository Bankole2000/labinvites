// Get Interactive UI Elements
const loginEmailInput = document.querySelector('#login-email')
const loginPasswordInput = document.querySelector('#login-password')
const rememberMeInput = document.querySelector('#remember-me')
const forgotPasswordLnk = document.querySelector('.forgot-password')
const signinBtn = document.querySelector('#sign-in')
const loginReturnLnk = document.querySelector('#login-return')
const forgotPasswordEmailInput = document.querySelector('#forgot-password-email')
const resetPasswordBtn = document.querySelector('#reset-password')


// functions
const checkIfRegistered = (email) => {

}

const loginUser = (email, pass) => {
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
          signinBtn.innerHTML = `Signed In ${successIcon}`;
          if (rememberMeInput.checked === true) {
          localStorage.setItem("labemail", data.email);
          localStorage.setItem("labpass", data.pass);
          localStorage.setItem("labid", data.id);
          }
        M.toast({html: `${successIcon} &nbsp; Login Successful &nbsp;  - &nbsp; Redirecting &nbsp; ${loadingIcon}`, classes: "successtoast", completeCallback: () => { window.location.replace("./events.html"); }, displayLength: 2000 });
        }else if(data.message === "failed"){
        M.toast({html: `${failIcon} &nbsp; Wrong Email / Password`, completeCallback: () => { enableButton(signinBtn, true); }, displayLength: 2000});
          // enableButton(signinbtn, true);
      //   $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
      }
    },
    
    error: function(){
      // M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
      enableButton('signinBtn', true);
      // $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
    },
    timeout: timeout
  })
};

const sendresetmail = (email) => {

}



// Events 

// Sign In 
signinBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  enableButton(e.target, false);
  const email = emailRegex.test(loginEmailInput.value) ? flagIfInvalid(loginEmailInput, true): flagIfInvalid(loginEmailInput, false);
  const pass = passRegex.test(loginPasswordInput.value) ? flagIfInvalid(loginPasswordInput, true) : flagIfInvalid(loginPasswordInput, false);
  console.log(email, pass);
  email !== 'undefined' && pass !== 'undefined' ? loginUser(email, pass) : M.toast({html : `Invalid Email / Password ${failIcon} `, completeCallback: () => { enableButton(e.target, true); }, displayLength: 1500});
})

loginEmailInput.addEventListener('click', () => {
  // console.log('you clicked me');
})

forgotPasswordLnk.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  document.querySelector('.login-only').style.display = 'none';
  document.querySelector('.forgot-password-only').style.display = 'block';
})

loginReturnLnk.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target)
  document.querySelector('.login-only').style.display = 'block';
  document.querySelector('.forgot-password-only').style.display = 'none';
})

resetPasswordBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  enableButton(e.target, false);
  const email = emailRegex.test(forgotPasswordEmailInput.value) ? flagIfInvalid(forgotPasswordEmailInput, true): flagIfInvalid(forgotPasswordEmailInput, false);
  const isRegistered = checkIfRegistered(email);
  isRegistered ? sendResetEmail(email) : M.toast({html : `This Email is Not Registered ${failIcon} `, completeCallback: () => { enableButton(resetPasswordBtn, true); }, displayLength: 1500});
})

const autoLogin = () => {
  let email = localStorage.getItem("labemail");
  let pass = localStorage.getItem("labpass");
  email && pass ? loginUser(email, pass) : false ;
};

autoLogin();