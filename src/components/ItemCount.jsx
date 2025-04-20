import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

function ItemCount({ onAdd }) {
  const [count, setCount] = useState(1);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setCount(value);
    }
  };

  const handleAdd = () => {
    if (count >= 1) {
      onAdd(count);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <ButtonGroup>
        <Button variant="secondary" onClick={decrease}>-</Button>
        <Form.Control
          type="number"
          value={count}
          onChange={handleChange}
          min={1}
          style={{ width: '60px', textAlign: 'center' }}
        />
        <Button variant="secondary" onClick={increase}>+</Button>
      </ButtonGroup>

      <Button variant="primary" onClick={handleAdd}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;