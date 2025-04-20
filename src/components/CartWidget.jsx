
import { useCart } from '../context/cartContext';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from 'react-icons/fa'; 

function CartWidget() {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <NavLink to="/cart" className="text-white text-decoration-none d-flex align-items-center gap-2">
      <FaShoppingCart size={24} />
      {totalQuantity > 0 && (
        <Badge pill bg="light" text="dark">
          {totalQuantity}
        </Badge>
      )}
    </NavLink>
  );
}

export default CartWidget;