















function mostrarContrasena() {
    var campoContrasena = document.getElementById("password");
  
    // Si el campo está vacío, mantenerlo como tipo "password"
    if (campoContrasena.value === "") {
      campoContrasena.type = "password";
    }
  }
  
  function toggleMostrarContrasena() {
    var campoContrasena = document.getElementById("password");
  
    // Cambiar dinámicamente entre tipo "password" y "text"
    campoContrasena.type = (campoContrasena.type === "password") ? "text" : "password";
  }
  
  
  