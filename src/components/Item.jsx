import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'



export default function Item ( {item} ) {
    const navigate = useNavigate()
    return (

        <Col lg={3}>
            <Card>
                <Card.Img variant="top" src={item.imagen}/>
                <Card.Body>
                <Card.Title> {item.nombre} </Card.Title>
                <Card.Text>
                    {item.categoria}
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/product/${item.id}`)}> Ver Mas</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

