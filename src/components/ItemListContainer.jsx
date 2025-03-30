import { useState, useEffect } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router"



function ItemListContainer (){
    const [items, setItems] = useState([])
    const {id} = useParams()

    
        useEffect(() => {
            const products = 'https://dummyjson.com/products'
            const productsCategory = `https://dummyjson.com/products/category/${id}`
            
                fetch(id ? productsCategory : products)
                .then(res => res.json())
                .then(info => setItems(info.products));
        }, [id])

    return( 
        <ItemList items={items} />      
    )
    

}

export default ItemListContainer