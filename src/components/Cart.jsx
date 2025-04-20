import { Button, ListGroup } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import CheckoutForm from './CheckoutForm'

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrecio = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div className="p-4">
      <h3>Carrito</h3>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ListGroup className="mb-3">
            {cart.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.nombre}</strong> x {item.quantity} — ${item.precio} c/u
                </div>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <p><strong>Total de ítems:</strong> {totalItems}</p>
          <p><strong>Total a pagar:</strong> ${totalPrecio.toFixed(2)}</p>

          <Button variant="secondary" onClick={clearCart}>Vaciar carrito</Button>
          <CheckoutForm />
        </>
      )}
    </div>
  );
}

export default Cart;