document.addEventListener('DOMContentLoaded', () => {
  // Register Form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;


       const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, include at least one letter, one number, and one special character.');
        return;
      }

      try {
        const response = await registerUser({ name, email, password });

        if (response.message) {
          alert('Registration successful! You can now log in.');
          window.location.href = 'login.html';
        } else {
          alert('Error: ' + (response.error || 'Registration failed'));
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }

  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await loginUser({ email, password });

        if (response.token) {
          alert('Login successful!');
          localStorage.setItem('token', response.token);
          // Redirect to a protected page
          window.location.href = 'index.html';
        } else {
          alert('Error: ' + (response.error || 'Login failed'));
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }
});

const API_URL = 'http://localhost:5000/api/auth';

// Register API
async function registerUser(user) {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
}

// Login API
async function loginUser(user) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
}

  
