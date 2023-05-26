import React from 'react';
import { Table } from 'react-bootstrap';

const orders = [
  { id: 1, date: '2023-05-12', customer: 'John Smith', total: '$120.00' },
  { id: 2, date: '2023-05-11', customer: 'Jane Doe', total: '$65.50' },
  { id: 3, date: '2023-05-10', customer: 'Bob Johnson', total: '$280.00' },
];

const LatestOrders = () => {
  return (
    <div className="mt-3">
      <h3 className='mb-3'>Latest Orders</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LatestOrders;
