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

  function sendFormData() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    $.ajax({
        url: 'submit.php',
        type: 'POST',
        data: formData,
        success: function(response) {
            // Clear the form
            document.getElementById('contactForm').reset();
            // Show the confirmation banner
            const banner = document.getElementById('confirmationBanner');
            banner.style.display = 'flex';
            // Hide the banner after 5 seconds
            setTimeout(function() {
                banner.style.display = 'none';
            }, 5000);
        },
        error: function() {
            alert('An error occurred. Please try again.');
        }
    });
}

  