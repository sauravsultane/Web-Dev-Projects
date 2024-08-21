document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}