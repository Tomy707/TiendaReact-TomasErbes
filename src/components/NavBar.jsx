import Carrito from './CartWidget'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

function NavBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const productosRef = collection(db, "products") 

        getDocs(productosRef).then(snapshot => {
            const productos = snapshot.docs.map(doc => doc.data())

            const categoriasExtraidas = productos
                .map(p => p.categoria)
                .filter(c => c) 

            const categoriasUnicas = [...new Set(categoriasExtraidas)]
            setCategories(categoriasUnicas)
        }).catch(error => {
            console.error("Error al traer categorías:", error)
        })
    }, [])

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">BocaShop</Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Categorías
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categories.length === 0 ? (
                            <Dropdown.Item disabled>Cargando...</Dropdown.Item>
                        ) : (
                            categories.map(cat => (
                                <Dropdown.Item
                                    key={cat}
                                    as={NavLink}
                                    to={`/category/${cat}`}
                                >
                                    {cat}
                                </Dropdown.Item>
                            ))
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Carrito />
            </Container>
        </Navbar>
    )
}

export default NavBar