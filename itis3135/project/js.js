document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("nav button");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
          btn.classList.remove("active");
        });
  
        this.classList.add("active");
      });
    });
  });
  