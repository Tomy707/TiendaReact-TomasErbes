import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { getProducts } from "../firebase/db";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts(id).then(data => setItems(data));
    }, [id]);

    return <ItemList items={items} />;
}

export default ItemListContainer;