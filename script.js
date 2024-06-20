let entryCount = 0;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const taxPayer = document.getElementById('taxPayer').value;
    const occupation = document.getElementById('occupation').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const notes = document.getElementById('notes').value;

    const displayData = document.getElementById('displayData');
    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Tax Payer:</strong> ${taxPayer}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Notes:</strong> ${notes}</p>
    `;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100px';
            img.style.borderRadius = '50%';
            entry.appendChild(img);
        }
        reader.readAsDataURL(profilePicture);
    }

    displayData.appendChild(entry);

    entryCount++;
    document.getElementById('entryCount').textContent = `Total Entries: ${entryCount}`;
});
