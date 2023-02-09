// script.js
function countdown(num) {
    document.getElementById("countdown").innerHTML = num;
    if (num > 1) {
      setTimeout(function() {
        countdown(num - 1);
      }, 1000);
    } else {
      fadeOut("countdown", function() {
        fadeIn("message");
      });
    }
  }
  
  function fadeOut(id, callback) {
    var element = document.getElementById(id);
    var opacity = 1;
    var timer = setInterval(function() {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
        if (callback) {
          callback();
        }
      }
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity -= opacity * 0.1;
    }, 50);
  }
  
  function fadeIn(id) {
    var element = document.getElementById(id);
    element.style.display = "block";
    var opacity = 0.1;
    var timer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity += opacity * 0.1;
    }, 50);
  }
  
  countdown(10);
  