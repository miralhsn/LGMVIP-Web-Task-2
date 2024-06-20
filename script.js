document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const taxPayer = document.querySelector('input[name="taxPayer"]:checked').value;
    const occupation = document.getElementById('occupation').value;
    const imageLink = document.getElementById('imageLink').value;
    const notes = document.getElementById('notes').value;

    const submittedEntries = document.getElementById('submittedEntries');
    const entry = document.createElement('div');
    entry.classList.add('entry');

    entry.innerHTML = `
        <div>
            <p><strong>${name}</strong></p>
            <p>${gender}</p>
            <p>${email}</p>
            <p>${taxPayer}</p>
            <p>${occupation}</p>
            ${notes ? `<p>Notes: ${notes}</p>` : ''}
        </div>
        <div>
            ${imageLink ? `<img src="${imageLink}" alt="${name}'s picture">` : ''}
        </div>
    `;

    submittedEntries.appendChild(entry);
    submittedEntries.appendChild(document.createElement('hr'));

    document.getElementById('registrationForm').reset();
});
