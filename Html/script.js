window.addEventListener('DOMContentLoaded', function() {
  const backgrounds = ['pic1.jpeg', 'pic2.jpeg'];
  let currentIndex = 0;
  const backgroundImage = document.getElementById('background-image');

  function changeBackground() {
      backgroundImage.style.backgroundImage = `url('pictures/${backgrounds[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % backgrounds.length;
  }

  changeBackground(); // Change background initially
  setInterval(changeBackground, 5000); // Change background every 5 seconds

  // Form submission handling
  const form = document.getElementById('message-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(this);
    
    // Send form data to server using Fetch API
    fetch('/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Optionally display a success message or redirect to a thank you page
    })
    .catch(error => {
      console.error(error);
      // Handle error
    });
  });
});
