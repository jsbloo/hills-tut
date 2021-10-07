import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import book1 from '../images/books/bond8-9.jpg';

const Resources = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book1}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Resources;