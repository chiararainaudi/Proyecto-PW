// Set dia 
    let countDownDate = new Date("Dec 25, 2023 15:37:25").getTime();
    console.log(countDownDate)
    // Update contador
    let x = setInterval(function() {
    
      // dia de hoy
    let now = new Date().getTime();
    
      // dias que faltan 
    let distance = countDownDate - now;
    
      // calculos
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // muestra los elementos with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
      // cuando el contador termine
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);

  function mostrarBienvenida() {
      alert('¡Bienvenido a Con Luz Propia!');
  }
  window.onload = mostrarBienvenida;


  function enviarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Limpiar mensajes de error previos
    document.getElementById("errorNombre").innerText = "";
    document.getElementById("errorEmail").innerText = "";
    document.getElementById("errorMensaje").innerText = "";

  
      // Validar campos (puedes agregar más validaciones según tus necesidades)
      var valido = true;
  
      if (nombre === "") {
          document.getElementById("errorNombre").innerText = "Por favor, ingresa tu nombre.";
          valido = false;
      }
  
      if (email === "") {
          document.getElementById("errorEmail").innerText = "Por favor, ingresa tu correo electrónico.";
          valido = false;
      }
  
      if (mensaje === "") {
          document.getElementById("errorMensaje").innerText = "Por favor, ingresa tu mensaje.";
          valido = false;
      }
  
      if (valido) {
          // Aquí podrías realizar la lógica para enviar el formulario
          alert("Formulario enviado correctamente.");
      }
  }
  

  

