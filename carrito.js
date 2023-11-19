
 // carrito 
let carrito = []
 // alerta 
function myFunction(producto) {
    alert("Se ha añadido al carrito");
    carrito.push(producto)
    console.log(carrito)
    console.log("largp:"+ carrito.length)
    document.getElementById('cantidad').innerHTML = carrito.length
    localStorage.setItem("carrito", carrito)
}

var carro = {};

// Función para agregar un elemento al carrito
function agregarAlCarrito(id, precio) {
    if (carro[id]) {
        carro[id].cantidad++;
    } else {
        carro[id] = {
            cantidad: 1,
            precio: precio
        };
    }

    actualizarCantidadCarrito();
}

// Función para actualizar la cantidad en la barra de navegación
function actualizarCantidadCarrito() {
    var cantidadElemento = document.getElementById("cantidad");
    var total = calcularTotalCarrito();

    cantidadElemento.textContent = total;
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    var total = 0;

    for (var id in carro) {
        total += carro[id].cantidad;
    }

    return total;
}



/* localStorage.setItem("carrito", carrito)
localStorage.setItem("Vela AMOR", velaamor)
localStorage.setItem("Vela TRANSMUTACIÓN", velatransmutacion)
localStorage.setItem("Vela SANACIÓN", velasanacion)
localStorage.setItem("Sales AMOR", salesamor)
localStorage.setItem("Sales TRANSMUTACIÓN", salestransmutacion)
localStorage.setItem("Sales RELAJACIÓN", salesrelajacion)
localStorage.setItem("Aromatizador AMOR", aromaamor)
localStorage.setItem("Aromatizador TRANSMUTACIÓN", aromatransmutacion)
localStorage.setItem("Aromatizador SANACIÓN", aromasanacion)
 */














//function agregaralcarrito(producto){
   // carrito.push(producto)
    //document.getElementById("carritomostrar")
    //innerValue=carrito
//}

//document.getElementById("Vela").addEventListener(click,agregaralcarrito("producto"))
//console.log(carrito)


