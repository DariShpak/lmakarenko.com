document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Превент дефолтної поведінки
  const form = event.target;
  const formData = new FormData(form);

  fetch('https://formspree.io/f/mpzvgkqe', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
        form.style.display = 'none';
          document.getElementById('successMessage').style.display = 'block';
          form.reset();
      } else {
          return response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                  const errorMessage = data["errors"].map(error => error["message"]).join(", ");
                  throw new Error(errorMessage);
              } else {
                  throw new Error('Unknown error occurred');
              }
          });
      }
  }).catch(error => {
      document.getElementById('errorMessage').style.display = 'block';
      console.error('There was an error!', error);
  });
});
