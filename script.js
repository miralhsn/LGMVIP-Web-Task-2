const form = document.getElementById('registrationForm');
const displayData = document.getElementById('displayData');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = `
        <h3>Registration Successful!</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    displayData.innerHTML = userData;
});
