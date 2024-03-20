document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById("logo");
  const formContainer = document.querySelector(".formContainer");
  const userName = document.getElementById("userName");
  const password = document.getElementById("password");
  const submitButton = document.getElementById("signUp");
  const loginForm = document.getElementById("loginForm");
  const pCreateAccount = document.querySelector(".pCreateAccount");
  const pLoginAccount = document.querySelector(".pLoginAccount");

  let inputVal = ""; // Store the input value

  // Function to handle input value change
  const handleInputValue = (str) => {
    inputVal = str; // Update the input value
  };

  // Event listener for input change
  userName.addEventListener("input", function() {
    handleInputValue(this.value);
  });

  // Event listener for input focus
  userName.addEventListener("focus", function() {
    handleInputValue(this.value);
  });

  // Click event listener for logo
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

  // Click event listener for create account link
  if (pCreateAccount) {
    pCreateAccount.addEventListener("click", function () {
      window.location.href = "./signup.html";
    });
  }
  
  // Click event listener for login link
  if (pLoginAccount) {
    pLoginAccount.addEventListener("click", function () {
      window.location.href = "./index.html";
    });
  }

  // Click event listener for submit button
  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let url = "https://realestatelogin-589cb3f21124.herokuapp.com/api/create";
    let method = "POST";

    const passwordAgain = document.getElementById("passwordAgain");

    let users = {
      username: userName.value,
      password: password.value,
      passwordIgen: passwordAgain.value,
    };
    userName.value = "";
    password.value = "";
    passwordAgain.value = "";

    try {
      let response = await fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(users),
      });
      if (response.ok) {
        alert("User Created");
      } else {
        alert("Failed to create user, try again.")
      }
    } catch (err) {
      console.error("Server failed", err);
    }
  });

  // Click event listener for login form submission
  loginForm.addEventListener("click", async (event) => {
    event.preventDefault();
    let url = "https://realestatelogin-589cb3f21124.herokuapp.com/login";
    let method = "POST";

    let userLogin = {
      username: userName.value,
      password: password.value,
    };

    // userName.value = "";
    // password.value = "";

    try {
      let response = await fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userLogin),
      });
      if (response.ok) {
        alert("Successful login");
        window.location.href = "/homepage.html";
      } else {
        console.log("Wrong username or password");
      }
    } catch (err) {
      console.error(err, "Failed");
    }
  });
});
