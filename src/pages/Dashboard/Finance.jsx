import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import moment from 'moment';
import AdForm from '../../Components/AdForm';

const Finance = () => {
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [salesData, setSalesData] = useState([
    { id: 1, date: moment().subtract(3, 'days'), amount: 150.0 },
    { id: 2, date: moment().subtract(5, 'days'), amount: 75.0 },
    { id: 3, date: moment().subtract(6, 'days'), amount: 100.0 },
    { id: 4, date: moment().subtract(7, 'days'), amount: 50.0 },
  ]);

  const handleDateRangeChange = (e) => {
    // TODO: Update state based on selected date range
  };

  const handleSalesDataUpdate = (updatedData) => {
    setSalesData(updatedData);
  };

  const totalSales = salesData.reduce((acc, curr) => acc + curr.amount, 0);


  const [formData, setFormData] = useState({
    operationType: '',
    amount: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };


  return (
    <Container>
      <h1>Finance Dashboard</h1>
      <h3>Sales Data</h3>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.date.format('MMMM D, YYYY')}</td>
              <td>${sale.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total Sales: ${totalSales.toFixed(2)}</h4>

     

    <AdForm/>
    </Container>
  );
};

export default Finance;
