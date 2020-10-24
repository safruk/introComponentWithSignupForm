//FORM VALIDATION

//read the form and form input elements via DOM
const form = document.querySelector(".form__main");
const firstName = document.querySelector(".form__firstName");
const lastName = document.querySelector(".form__lastName");
const email = document.querySelector(".form__email");
const password = document.querySelector(".form__password");

//Submit event handling
function handleSubmit(event) {
  event.preventDefault();

  if (!firstName.checkValidity()) {
    setError(firstName, "First Name cannot be empty");
  }

  if (!lastName.checkValidity()) {
    setError(lastName, "Last Name cannot be empty");
  }

  if (!email.checkValidity() && email.value === "") {
    setError(email, "Email Address cannot be empty");
  } else if (!email.checkValidity()) {
    setError(email, "Looks like this is not an email");
  }

  if (!password.checkValidity()) {
    setError(password, "Password cannot be empty");
  }

  //When everything is alright form should be set to validate.Havent figured it out yet
  // else {
  //   form.removeAttribute("novalidate");
  // }
  // console.log(form.attributes);
}

function setError(input, message) {
  // console.log(input);

  let sibling = input.nextElementSibling;
  // console.log(sibling);
  sibling.classList.add("form__error-msg");
  input.classList.add("form__error");
  sibling.classList.add("form__error-msg");
  sibling.innerHTML = message;

  if (input.value == "") {
    input.classList.add("form__field-clear");
  }
}

//Focus event
function handleFocus(event) {
  let field = event.target;

  field.classList.remove("form__error");
  // field.classList.remove("form__error-icon");
  field.nextElementSibling.innerHTML = "";
  field.classList.remove("form__field-clear");
  // console.log(field);
}

//Keypress event for enter key
function handleKeypress(event) {
  let key = event;
  let nextField;
  // console.log(key.which);
  if ((!key.target.value === "" && key.which === 13) || key.keyCode === 13) {
    // console.log(key);
    // console.log(key.target.nextElementSibling.nextElementSibling);
    // handleFocus(key.target.nextElementSibling.nextElementSibling);
    nextField = key.target.nextElementSibling.nextElementSibling;
    // console.log(nextField);

    nextField.focus();
    handleFocus(key);
  }
}

//Event Listeners for focus,keypress,and submit events
form.addEventListener("submit", handleSubmit);
firstName.addEventListener("focus", handleFocus);
lastName.addEventListener("focus", handleFocus);
email.addEventListener("focus", handleFocus);
password.addEventListener("focus", handleFocus);
firstName.addEventListener("keypress", handleKeypress);
lastName.addEventListener("keypress", handleKeypress);
email.addEventListener("keypress", handleKeypress);
password.addEventListener("keypress", handleKeypress);
