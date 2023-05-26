import React, { useState } from 'react';
import { Container, Form, Button, Modal, Spinner } from 'react-bootstrap';

const AdForm = () => {
  const [product, setProduct] = useState('');
  const [duration, setDuration] = useState(1);
  const [price, setPrice] = useState(0);
  const [confirmModal, setConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleDurationChange = (e) => {
    const selectedDuration = parseInt(e.target.value);
    setDuration(selectedDuration);
    const calculatedPrice = selectedDuration * 10; // Пример расчета цены: 10 долларов за каждый день рекламы
    setPrice(calculatedPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmModal(true);
  };

  const handleConfirm = () => {
    setConfirmModal(false)
    
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };

  return (
    <Container>
      <h1>Create Ad</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="product">
          <Form.Label className='mt-3'>Product</Form.Label>
          <Form.Control as="select" value={product} onChange={handleProductChange}>
            <option>Select a product</option>
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="duration" className='mt-3'>
          <Form.Label>Duration (in days)</Form.Label>
          <Form.Control type="number" min="1" value={duration} onChange={handleDurationChange} />
        </Form.Group>

        <Form.Group controlId="price" className='mt-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" min="0" value={price} readOnly />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">Submit</Button>
      </Form>

      <Modal show={confirmModal} onHide={() => setConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Ad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to create this ad?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={loading} backdrop="static" keyboard={false}>
        <Modal.Body>
          <Spinner animation="border" /> Creating ad...
        </Modal.Body>
      </Modal>

      <Modal show={success} onHide={() => setSuccess(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ad Created</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your ad has been created successfully!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setSuccess(false)}>
            Close
            </Button>
    </Modal.Footer>
  </Modal>
</Container>
  )}

export default AdForm
         
