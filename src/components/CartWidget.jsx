import '../App.css'


function Carrito (){
    const itemsCarrito = 7
    
    return(
        <div className='contenedorCarrito'>
            <img src="../img/carrito.png" alt="" className='carritoImg' />
            <div className="burbujaCarrito">
                <p>{itemsCarrito}</p>
            </div>

        </div>
    )
}

export default Carrito