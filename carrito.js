
 // carrito 
 let carrito = []
 // alerta 
 function myFunction(producto) {
   alert("Se ha añadido al carrito");
   carrito.push(producto)
   console.log(carrito)
   console.log("largp:"+ carrito.length)
   document.getElementById('cantidad').innerHTML = carrito.length
 }
 
 // const CARRITO=[]
 
 //function agregar_producto(producto){
   //CARRITO.push(producto);
 
 
 //}
 //button.AÑADIRALCARRITOaddEventListener("click",agregarproducto)
 
 //erase.AddEventListener("click", CARRITO=[])
 
 console.log('Hola')
 let carritoHTML = document.getElementById("carritoHTML")
 console.log(carritoHTML)
 carritoHTML.style.color="blue"
 carritoHTML.innerHTML = carrito[0]

