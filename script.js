document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const tax = document.querySelector('input[name="tax"]:checked').value;
    const occupation = document.getElementById('occupation').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const notes = document.getElementById('notes').value;

    const reader = new FileReader();
    reader.onloadend = function() {
        const imageData = profilePicture ? reader.result : '';

        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `
            <div>
                <strong>Name:</strong> ${name} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>Date of Birth:</strong> ${dob} <br>
                <strong>Gender:</strong> ${gender} <br>
                <strong>Tax Payer:</strong> ${tax} <br>
                <strong>Occupation:</strong> ${occupation} <br>
                <strong>Notes:</strong> ${notes}
            </div>
            ${imageData ? `<img src="${imageData}" alt="Profile Picture">` : ''}
        `;
        document.getElementById('entries').appendChild(entry);

        document.getElementById('registrationForm').reset();
    };

    if (profilePicture) {
        reader.readAsDataURL(profilePicture);
    } else {
        reader.onloadend();
    }
});
