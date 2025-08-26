     const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                successMessage.style.display = 'block';
                form.reset();

                // Optionally, send to backend here with fetch()
                // fetch('/api/send', {...})
            } else {
                alert("Please fill in all fields.");
            }
        });



           
      
    