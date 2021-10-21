const emailInput = document.querySelector(".submit-email input");
const submitButton = document.querySelector(".submit-email button");
const showEmailError = document.querySelector(".error-email");

const verifyEmail = () => {
  const emailValid = validateEmail(emailInput.value);
  if (emailValid) {
    emailInput.classList.remove("error");
    showEmailError.classList.remove("error");
  } else {
    emailInput.classList.add("error");
    showEmailError.classList.add("error");
  }
};

function validateEmail(email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

emailInput.addEventListener("blur", verifyEmail);
submitButton.addEventListener("click", verifyEmail);
