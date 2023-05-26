import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';

function GoodsModal({ goods, onSave, onClose }) {
  const [name, setName] = useState(goods?.name || '');
  const [image, setImage] = useState(goods?.image || '');
  const [sold, setSold] = useState(goods?.sold || 0);

  const handleNameChange = e => setName(e.target.value);
  const handleImageChange = e => setImage(e.target.value);
  const handleSoldChange = e => setSold(Number(e.target.value));

  const handleSave = () => {
    onSave({ id: goods?.id, name, image, sold });
    onClose();
  };

  return (
    <Modal show={Boolean(goods)} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{goods ? 'Edit Goods' : 'Add Goods'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter image URL" value={image} onChange={handleImageChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSold">
            <Form.Label>Sold</Form.Label>
            <Form.Control type="number" placeholder="Enter sold" value={sold} onChange={handleSoldChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}


export default GoodsModal