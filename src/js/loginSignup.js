document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const formContainer = document.querySelector(".formContainer");




  logo.addEventListener("click", function () {
    this.classList.toggle("clicked");

    if (
      formContainer.style.display === "none" ||
      formContainer.style.display === ""
    ) {
      // Set initial opacity to 0
      formContainer.style.opacity = "0";
      // Display the form container
      formContainer.style.display = "flex";

      // Use setTimeout to delay setting opacity to 1
      setTimeout(function () {
        formContainer.style.opacity = "1";
      }, 1200); // Adjust delay as needed
    } else {
      // Transition opacity to 0 before hiding the form container
      formContainer.style.opacity = "0";

      // Use setTimeout to delay hiding the form container
      setTimeout(function () {
        formContainer.style.display = "none";
      }, 2500); // Adjust delay to match transition duration
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const pCreateAccount = document.querySelector(".pCreateAccount");
  if (pCreateAccount) {
      pCreateAccount.addEventListener("click", function () {
          window.location.href = "./signup.html";
      });
  }

  const pLoginAccount = document.querySelector(".pLoginAccount");
  if (pLoginAccount) {
      pLoginAccount.addEventListener("click", function () {
          window.location.href = "./index.html";
      });
  }
});