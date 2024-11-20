function registerUser(event) {
    event.preventDefault();
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
  }
  
  function loginUser(event) {
    event.preventDefault();
    alert('Login successful! Welcome to LearnHub.');
    window.location.href = 'home.html';
  }
  