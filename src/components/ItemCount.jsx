import { useState } from "react";
import '../App.css'

function ItemCount () {
    const [count, setCount] = useState(0)
    
    const handleSub = () => {
        setCount( count - 1)
    }

    const handleAdd = () =>  {
        setCount( count + 1)
    }

    return (
        <div>
            <p> {count} </p>
            <button onClick={handleSub} className="button"> <p className="botonAniadir">-</p> </button>
            <button onClick={handleAdd} className="button"> <p className="botonAniadir"> +  </p></button>
            <button className="button"> <p className="botonAniadir"> Agregar al Carrito </p>  </button>
        </div>
    )

}

export default ItemCount