import Carrito from './CartWidget'
import {NavLink} from 'react-router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import {useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


function NavBar () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(cat => setCategories(cat));
    },[])
    
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/"> TodoShop </Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Categorias
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {categories.map (cat => <Dropdown.Item to={`/category/${cat}`} key={cat} as={NavLink}> {cat} </Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Carrito/>
            </Container>
        </Navbar>




    )
}

export default NavBar