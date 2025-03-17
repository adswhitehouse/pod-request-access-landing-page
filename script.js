// Variables
let formInput = document.querySelector(".jsFormInput");
let formBtn = document.querySelector(".jsFormBtn");
let errorMsg = document.querySelector(".jsErrorMsg");
let form = document.querySelector(".jsForm");

let errorMsgTimeout;
let isErrorMsgActive = false;
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!formInput.value.includes("@")) {
    errorMsg.classList.add("error-msg-visibility");
    form.classList.add("error-border");
    if (!isErrorMsgActive) {
      isErrorMsgActive = true;
      errorMsgTimeout = setTimeout(() => {
        errorMsg.classList.remove("error-msg-visibility");
        form.classList.remove("error-border");
        isErrorMsgActive = false;
      }, 2000);
    } else {
      clearTimeout(errorMsgTimeout);
      errorMsgTimeout = setTimeout(() => {
        errorMsg.classList.remove("error-msg-visibility");
        form.classList.remove("error-border");
        isErrorMsgActive = false;
      }, 2000);
    }
  }
});
