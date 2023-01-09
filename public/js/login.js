const seedButton = document.getElementById('seedButton');

if(seedButton){
  seedButton.addEventListener('click', seed);
}

function seed(event) {
  event.preventDefault();
  fetch('/api/seed').then(res => res.json).then(data => console.log(data));
}

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  }

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("username-signup").value.trim();
  const email = document.getElementById("email-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();

  if (username && email && password) {
    console.log(username, email, password);
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("login-form").addEventListener("submit", loginFormHandler);
document
  .getElementById("signup-form")
  .addEventListener("submit", signupFormHandler);