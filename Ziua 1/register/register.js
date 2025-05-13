// Selectăm formularul de înregistrare
const registerForm = document.getElementById('register-form');

// Adăugăm un eveniment pentru trimiterea formularului
window.addEventListener('unload', function () {
    // Cod care rulează la părăsirea paginii
});

    // Preluăm valorile introduse de utilizator
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validăm dacă parolele coincid
    if (password !== confirmPassword) {
        alert('Parolele nu coincid!');
        return;
    }

    // Creăm un obiect pentru utilizator
    const user = {
        name: name,
        surname: surname,
        email: email,
        password: password,
    };

    // Salvăm utilizatorul în localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Afișăm un mesaj de succes
    alert('Înregistrare reușită!');

    // Redirecționăm utilizatorul către pagina de login
    window.location.href = 'login.html';