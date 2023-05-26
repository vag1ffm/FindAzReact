import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Orders() {
  const orders = [
    { id: 1, date: '2023-05-15', total: 99.99, status: 'Pending' },
    { id: 2, date: '2023-05-14', total: 149.99, status: 'Shipped' },
    { id: 3, date: '2023-05-13', total: 49.99, status: 'Delivered' },
  ];

  return (
    <Container>
      <h1 className="mb-3">Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                    <Link to='/dashboard/orders/5'>
                        <Button className="me-2" variant="primary">
                                Edit
                        </Button>

                    </Link>
                <Button variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Orders;
