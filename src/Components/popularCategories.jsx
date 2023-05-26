import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const PopularCategories = () => {
  const categories = [
    { name: 'Electronics', visits: 100 },
    { name: 'Clothing', visits: 85 },
    { name: 'Home & Garden', visits: 75 },
    { name: 'Sports & Outdoors', visits: 60 },
    { name: 'Toys & Games', visits: 50 },
  ];

  return (
    <Container className="my-5">
      <h2 className='mb-3'>Popular Categories</h2>
      <Row>
        <Col md={8}>
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item key={category.name}>
                {category.name}
                <span className="float-end">{category.visits} visits</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularCategories;
