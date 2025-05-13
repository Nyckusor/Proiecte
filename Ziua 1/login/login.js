// Selectăm formularul de login
const loginForm = document.getElementById('login-form');

// Adăugăm un eveniment pentru trimiterea formularului
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenim reîncărcarea paginii

    // Preluăm valorile introduse de utilizator
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Preluăm utilizatorul din localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Verificăm dacă datele introduse sunt corecte
    if (user && user.email === email && user.password === password) {
        alert('Logare reușită!');
        // Redirecționăm utilizatorul către pagina principală
        window.location.href = 'home.html';
    } else {
        alert('Email sau parolă incorectă!');
    }
});