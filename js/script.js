// Validación del formulario

function validateForm(event) {
    event.preventDefault(); // Previene el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Detiene el envío del formulario
    }

    return validateCredentials(username, password);
}

// Función para validar las credenciales y redireccionar

function validateCredentials(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert("Inicio de sesión exitoso.");
        window.location.href = 'main.html'; // Asegúrate de que esta ruta sea correcta
        return true;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}

// Función para registrar nuevos usuarios
function registerUser() {
    const username = prompt("Introduce un nombre de usuario:");
    const password = prompt("Introduce una contraseña:");
    
    if (username && password) {
        saveCredentials(username, password);
    } else {
        alert("Usuario o contraseña inválidos.");
    }
}

// Función para crear y almacenar las credenciales en localStorage
function saveCredentials(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verificamos si el usuario ya existe
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        alert("Este usuario ya existe.");
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario registrado exitosamente.");
    }
}