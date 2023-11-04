// Set dia 
    let countDownDate = new Date("Nov 15, 2023 15:37:25").getTime();
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


