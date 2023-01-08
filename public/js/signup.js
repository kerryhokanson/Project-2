document.addEventListener('DOMContentLoaded', async function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const data = { name, email, password };
  
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    });
  });
  