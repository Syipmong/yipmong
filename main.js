window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'flex';
  setTimeout(function() {
    loadingScreen.style.display = 'none';
  }, 5000);
});

window.addEventListener('DOMContentLoaded', function() {
  var loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'none';
});

function showScreen(screenName) {
  var screens = document.getElementsByClassName("screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].style.display = "none";
  }

  var navLinks = document.getElementsByClassName("nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }

  var screen = document.getElementById(screenName + "Screen");
  screen.style.display = "block";

  var activeNavLink = document.querySelector('a[href="#"][onclick="showScreen(\'' + screenName + '\')"]');
  activeNavLink.classList.add("active");
}

showScreen("home");
