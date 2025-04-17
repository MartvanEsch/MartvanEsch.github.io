
  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value || document.getElementById('name').getAttribute('value');
    const email = document.getElementById('email').value || document.getElementById('email').getAttribute('value');
    const message = document.getElementById('message').value || document.getElementById('message').getAttribute('value');

    const formData = new FormData();
    formData.append('access_key', 'c4bc257d-630c-4d9f-969f-68832cb93862'); // Replace with your Web3Forms access key
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json().then(data => {
        console.log(data);
        return data;
    });
    
    if (result.success) {
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset();
    } else {
      alert("Something went wrong.");
    }
  });

