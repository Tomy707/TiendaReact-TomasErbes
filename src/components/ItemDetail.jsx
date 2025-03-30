import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

function ItemDetail ({detail}) {
    return(
        <div className="d-flex justify-content-center align-items-center my-5" >
        <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={detail?.thumbnail} alt={detail?.title} />
            <Card.Body>
                <Card.Title>{detail?.title}</Card.Title>
                <Card.Text>
                    {detail?.description}
                </Card.Text>
                <Card.Text>
                    <strong>Price: ${detail?.price}</strong>
                </Card.Text>
                 <ItemCount/>
            </Card.Body>
        </Card>
    </div>
)
}

export default ItemDetail