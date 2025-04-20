import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const MySwal = withReactContent(Swal)

function CheckoutForm() {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' })

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)

  const handleSubmit = async () => {
    const order = {
      buyer: formData,
      items: cart,
      total,
      date: new Date()
    }

    try {
      const docRef = await addDoc(collection(db, 'orders'), order)
      clearCart()

      MySwal.fire({
        icon: 'success',
        title: '¡Orden generada!',
        html: `<p>Tu ID de orden es: <strong>${docRef.id}</strong></p>`,
        confirmButtonText: 'Volver a la tienda'
      }).then(() => {
        navigate('/')
      })

    } catch (error) {
      console.error('Error al guardar la orden:', error)
      Swal.fire('Error', 'No se pudo generar la orden. Intenta más tarde.', 'error')
    }
  }

  const openForm = () => {
    const resumen = cart.map(item =>
      <li key={item.id}>{item.nombre} x {item.quantity} - ${item.precio} c/u</li>
    )

    let nombre = '', email = '', telefono = ''

    MySwal.fire({
      title: 'Finalizar compra',
      html: (
        <div style={{ textAlign: 'left' }}>
          <div className="mb-2">
            <label>Nombre</label>
            <input className="swal2-input" type="text" onChange={(e) => nombre = e.target.value} />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input className="swal2-input" type="email" onChange={(e) => email = e.target.value} />
          </div>
          <div className="mb-2">
            <label>Teléfono</label>
            <input className="swal2-input" type="tel" onChange={(e) => telefono = e.target.value} />
          </div>
          <hr />
          <h5>Resumen de compra</h5>
          <ul style={{ paddingLeft: '1.2rem' }}>{resumen}</ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
        </div>
      ),
      showCancelButton: true,
      confirmButtonText: 'Confirmar compra',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        if (!nombre || !email || !telefono) {
          Swal.showValidationMessage('Todos los campos son obligatorios')
          return false
        }
      
        if (!/^\d+$/.test(telefono)) {
          Swal.showValidationMessage('El teléfono debe contener solo números')
          return false
        }
      
        setFormData({ nombre, email, telefono })
        return handleSubmit()
      }
    })
  }

  return (
    <button className="btn btn-primary ms-3" onClick={openForm}>
      Finalizar compra
    </button>
  )
}

export default CheckoutForm