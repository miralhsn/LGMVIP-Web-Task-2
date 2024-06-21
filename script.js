document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const taxPayer = document.querySelector('input[name="taxPayer"]:checked').value;
    const occupation = document.getElementById('occupation').value;
    const imageUpload = document.getElementById('imageUpload').files[0];
    const notes = document.getElementById('notes').value;

    const submittedEntries = document.getElementById('submittedEntries');
    const entry = document.createElement('div');
    entry.classList.add('entry');

    const reader = new FileReader();
    reader.onload = function(e) {
        const imageUrl = imageUpload ? e.target.result : '';

        entry.innerHTML = `
            <div>
                <p><strong>${name}</strong></p>
                <p>${gender}</p>
                <p>${email}</p>
                <p>${dob}</p>
                <p>${taxPayer}</p>
                <p>${occupation}</p>
                ${notes ? `<p>Notes: ${notes}</p>` : ''}
            </div>
            <div>
                ${imageUrl ? `<img src="${imageUrl}" alt="${name}'s picture">` : ''}
            </div>
        `;

        submittedEntries.appendChild(entry);
        submittedEntries.appendChild(document.createElement('hr'));

        document.getElementById('registrationForm').reset();
    };

    if (imageUpload) {
        reader.readAsDataURL(imageUpload);
    } else {
        reader.onload();
    }
});
