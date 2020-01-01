const emailRegex = /^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const passRegex = /^[0-9a-zA-Z$&!@#%^*(){}"'\[\];:<>/\\?+=_.-\|]{8,}$/i ; 
// const dateRegex
// const datetimeRegex
const nameRegex = /^[a-z]{3,}$/i;
const failIcon = '<i class="mdi mdi-close-circle" style="color: red;"></i>';
const successIcon = '<i class="mdi mdi-check-circle" style="color: green;"></i>';
const loadingIcon =  '<i class="fa fa-spinner fa-pulse"></i>';
const timeout = 5000;


const allInputs = document.querySelectorAll('input[type=text], input[type=email], input[type=password], input[type=date], input[type=datetime-local]');


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
  // type == 'date' ? isValid = dateRegex.test(value) : false;
  // type == 'datetime-local' ? isValid = datetimeRegex.test(value) : false;
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