import { Container, Row, Col, Card } from 'react-bootstrap';

const Profile = () => {
  const shippingMethods = [
    {
      name: 'Standard',
      time: '2-5 business days',
      cost: 'Free',
    },
    {
      name: 'Expedited',
      time: '1-2 business days',
      cost: '$9.99',
    },
    {
      name: 'International',
      time: '5-10 business days',
      cost: '$14.99',
    },
  ];

  return (
    <>
        <Container className="mt-3">
        <Row>
            <Col md={4}>
            <Card>
                <Card.Body>
                <Card.Title>Profile Info</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Seller Name</Card.Subtitle>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Text>
                    Contact Information:
                    <br />
                    Email: seller@email
                    <br />
                    Phone: 123-456-7890
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={8}>
            <Card>
                <Card.Body>
                <Card.Title>Shipping Information</Card.Title>
                <Card.Text>
                    We offer the following shipping methods:
                    <br />
                    <br />
                    {shippingMethods.map((method, index) => (
                    <div key={index}>
                        <strong>{method.name}</strong>
                        <br />
                        <em>Estimated Delivery Time:</em> {method.time}
                        <br />
                        <em>Cost:</em> {method.cost}
                        <hr />
                    </div>
                    ))}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
        <Container className="mt-3">
            <h3>Информация об оплате</h3>
            <Row className="mt-3">
                <Col md={6}>
                <Card>
                    <Card.Header>Методы оплаты</Card.Header>
                    <Card.Body>
                    <ul>
                        <li>Банковская карта</li>
                        <li>Электронные деньги</li>
                        <li>Оплата при получении</li>
                    </ul>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <Card>
                    <Card.Header>Условия оплаты</Card.Header>
                    <Card.Body>
                    <ul>
                        <li>100% предоплата</li>
                        <li>Частичная предоплата</li>
                        <li>Отсрочка платежа для постоянных клиентов</li>
                    </ul>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </>
   
    
  );
};

export default Profile;
