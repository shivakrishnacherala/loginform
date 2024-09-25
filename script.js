document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    let valid = true;

    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        valid = false;
    }

    const passwordRequirements = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRequirements.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one digit, and one special character.';
        valid = false;
    }

    // If valid, proceed with form submission or further processing
    if (valid) {
        alert('Login successful!'); // Replace with actual login logic
        // You can redirect or handle the login here
    }
});
