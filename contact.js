function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Prepare the form data for submission
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Send the form data to the server using the Fetch API
  fetch("https://formspree.io/f/mvondvpe", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(json => {
    if (json.ok) {
      alert("Thank you for your message! We'll get back to you as soon as possible.");
    } else {
      alert("An error occurred while submitting the form. Please try again.");
    }
    document.getElementById("contact-form").reset();
  })
  .catch(error => {
    console.error("Error submitting form:", error);
    alert("An error occurred while submitting the form. Please try again.");
  });
}
