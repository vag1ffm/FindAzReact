import { Card, Col, Container, Row } from 'react-bootstrap';

function LatestProducts() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'https://via.placeholder.com/150',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for Product 3.',
        image: 'https://via.placeholder.com/150',
        price: 7.99,
      },
      {
        id: 4,
        name: 'Product 3',
        description: 'This is the description for Product 3.',
        image: 'https://via.placeholder.com/150',
        price: 7.99,
      },
  ];

  return (
    <div className='mt-3'>
      <h2 className='mb-3'>Mostest Views Products</h2>
      <Container>
        <Row>
          {products.map((product) => (
            <Col md={3} key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LatestProducts;
