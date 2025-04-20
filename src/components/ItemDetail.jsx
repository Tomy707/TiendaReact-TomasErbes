import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { useCart } from '../context/cartContext' 

function ItemDetail({ detail }) {
  const { addToCart } = useCart(); 

  const handleAdd = (quantity) => {
    if (detail && detail.id) {
      addToCart(detail, quantity);
    } else {
      console.warn('Producto inválido:', detail);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Card style={{ width: '40rem' }}>
        <Card.Img variant="top" src={detail?.imagen} alt={detail?.nombre} />
        <Card.Body>
          <Card.Title>{detail?.nombre}</Card.Title>
          <Card.Text>{detail?.descripcion}</Card.Text>
          <Card.Text>
            <strong>Price: ${detail?.precio}</strong>
          </Card.Text>
          <ItemCount onAdd={handleAdd} /> 
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail