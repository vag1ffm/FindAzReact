import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import SalesChart from '../../Components/sayled7days';
import SalesLast7Days from '../../Components/sayled7days';
import SalesLast30Days from '../../Components/sayled30days';
import LatestOrders from '../../Components/ListOfLastOrders';
import LatestProducts from '../../Components/lastestProducts';
import SiteVisitsLast7Days from '../../Components/SiteVisitorsChart';
import PopularCategories from '../../Components/popularCategories';

function DashboardHome() {
  
  return (
    <>
   

      <Container className="my-4">
        <h1>Dashboard Home</h1>
        <p>Welcome to your dashboard home!</p>
      </Container>
      <Container fluid >
        <Row className="mt-3">
          <Col md={4}>
            <Card>
              <Card.Header>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i> Sales
              </Card.Header>
              <Card.Body>
                <h5>Total Sales: $5000</h5>
                <h6>Last Month Sales: $2000</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>
              <i class="fa-solid fa-money-bill-1"></i> Finance
              </Card.Header>
              <Card.Body>
                <h5>Total Revenue: $10000</h5>
                <h6>Last Month Revenue: $5000</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>
              <i class="fa fa-line-chart" aria-hidden="true"></i> Statistics
              </Card.Header>
              <Card.Body>
                <h5>Total Visitors: 1000</h5>
                <h6>Last Month Visitors: 500</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5 '>
        
        <SalesLast7Days />
        <SalesLast30Days/>

      </Container>
      <Container>
        <LatestOrders/>
        <LatestProducts/>
        <PopularCategories/>
      </Container>
    </>
  );
}

export default DashboardHome;
