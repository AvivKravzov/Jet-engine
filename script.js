document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`תודה ${name}, אנחנו ניצור קשר עם ${email}.`);
    } else {
        alert('נא למלא את כל השדות.');
    }
});
