// const contactForm = document.getElementById("contactForm");
// const errorMessages = document.getElementById("errorMessages");

// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const { FirstName, LastName, EmailAddress, QueryType, Message } =
//     contactForm.elements;

//   errorMessages.innerHTML = "";
//   if (!FirstName.value.trim()) {
//     displayError("This field is required.");
//     return;
//   }
//   if (!EmailAddress.value.trim() || !isValidEmail(email.value)) {
//     displayError("Please enter a valid email address.");
//     return;
//   }
//   function displayError(message) {
//     errorMessages.innerHTML += `<div class="error">${message}</div>`;
//   }
// });
// const firstname = document.getElementById("firstname");
// const lastname = document.getElementById("lastname");
// const email = document.getElementById("email");
// const query = document.getElementById("query");
// const message = document.getElementById("message");
// const form = document.getElementById("form");

// const firstname_error = document.getElementById("firstname_error");

// form.addEventListener("submit", (e) => {
//   if (firstname.value === "" || firstname.value == null) {
//     e.preventDefault();
//     firstname_error.innerHTML = "FirstName is required";
//   }
// });
