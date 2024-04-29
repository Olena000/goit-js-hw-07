const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (
    elements.email.value.trim() === "" ||
    elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    const infoForm = {
      email: elements.email.value,
      password: elements.password.value,
    };
    console.log(infoForm);
  }
  form.reset();
}
