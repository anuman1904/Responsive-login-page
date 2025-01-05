const users = []

function validateLogin() {
  let user = document.getElementById('user').value;
  let pass = document.getElementById('pass').value;

  if (user && pass) {

  }
}

function switchForm() {
  let loginForm = document.getElementById('loginForm');
  let signupForm = document.getElementById('signupForm');

  if (loginForm.style.transform = "translateX(0%)") {
    loginForm.style.transform = "translateX(-50%) scale(.8)";
    signupForm.style.transform = "translateX(50%) scale(.8)";
    signupForm.style.opacity = ".5"
    loginForm.style.opacity = ".5"
  }


  function finish() {
    if (loginForm.style.transform = "translateX(-50%) scale(.8)") {
      loginForm.style.transform = "translateX(0%) scale(1)";
      signupForm.style.transform = "translateX(0%) scale(1)";
      signupForm.style.opacity = "1"
      signupForm.style.zIndex ="3"
      loginForm.style.opacity = "0"
    }
  }
  setTimeout(finish, 800)
}

function switchLogin() {
  let loginForm = document.getElementById('loginForm');
  let signupForm = document.getElementById('signupForm');

  if (loginForm.style.transform = "translateX(0%)") {
    loginForm.style.transform = "translateX(-50%) scale(.8)";
    signupForm.style.transform = "translateX(50%) scale(.8)";
    signupForm.style.opacity = ".5"
    loginForm.style.opacity = ".5"
  }


  function finsh() {
    if (loginForm.style.transform = "translateX(-50%) scale(.8)") {
      signupForm.style.transform = "translateX(0%) scale(1)";
      loginForm.style.transform = "translateX(0%) scale(1)";
      loginForm.style.opacity = "1"
      signupForm.style.zIndex="1"
      signupForm.style.opacity = "0"
    }
  }
  setTimeout(finsh, 800)
}