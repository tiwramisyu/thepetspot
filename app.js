const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


  document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      document.getElementById("displayTitle").textContent =
        "Message from " + document.getElementById("username").value;
      document.getElementById("displayEmail").value = document.getElementById("email").value;
      document.getElementById("displayPhone").value = document.getElementById("phone").value;
      document.getElementById("displayMessage").value = document.getElementById("message").value;
    // Kosongkan form
    document.querySelector("form").reset();
  });