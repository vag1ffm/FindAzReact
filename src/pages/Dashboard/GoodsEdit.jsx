import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const GoodsEdit = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState([]);
    const [photos, setPhotos] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // добавить новый товар в магазин
    }
  
  
    const handlePhotoUpload = (event) => {
      const newPhotos = Array.from(event.target.files);
      setPhotos([...photos, ...newPhotos]);
    };
    const handleImageUpload = (event) => {
      const newPhotos = Array.from(event.target.files);
      console.log(newPhotos);
      setImage(newPhotos);
    };
    const handlePhotoDelete = (index) => {
      const newPhotos = [...photos];
      newPhotos.splice(index, 1);
      setPhotos(newPhotos);
    };
    const handleImageDelete = (index) => {
      const newPhotos = [...image];
      newPhotos.splice(index, 1);
      setImage(newPhotos);
    };
  
    const {id} = useParams()
  
  
    return (
      <Form onSubmit={handleSubmit} className='mt-3'>
          <Container className='d-flex p-0'>
              <Form.Group  controlId="product-photo" className='mt-1 me-5 col-3'>
              <Form.Label>Главное фотография товара</Form.Label>
  
              <div className="input-group mb-3">
                  <div className="custom-file">
                  <Form.Control type="file" className="custom-file-input" id="inputGroupFile020" onChange={handleImageUpload} style={{ display: 'none' }} />
                  </div>
                  <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => document.getElementById('inputGroupFile020').click()}>Выбрать фото</button>
                  </div>
              </div>
              
              {image.length > 0 &&
                  
                  <Col className="my-3 position-relative ">
                  <div className=" col-12 position-relative">
                    <img src={URL.createObjectURL(image[0])} alt={`Product photo`} className="w-100 col-12" style={{ width:'100%' }} />
                    <button onClick={() => handleImageDelete(0)} className="btn btn-sm btn-danger  position-absolute end-0 mt-1 me-1 ">
                      <i className="fas fa-trash-alt "></i>
                    </button>
                  </div>
                  
              </Col>
             
              }
              </Form.Group>
              <Form.Group className=' mt-1 col-9' controlId="product-photos">
                  <Form.Label>Фотографии товара</Form.Label>
  
                  <div className="input-group mb-3">
                      <div className="custom-file">
                      <Form.Control type="file" className="custom-file-input" id="inputGroupFile02" multiple onChange={handlePhotoUpload} style={{ display: 'none' }} />
                      </div>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" onClick={() => document.getElementById('inputGroupFile02').click()}>Выбрать фото</button>
                      </div>
                  </div>
           
                  
      <Row>
      {photos.map((photo, index) => {
        return (
          <Col xs={6} md={4} key={index} className="my-3 position-relative">
            <div className="border rounded p-1">
              <img src={URL.createObjectURL(photo)} alt={`Product ${index}`} className="w-100" style={{ objectFit: 'contain', maxHeight: '200px' }} />
              <button onClick={() => handlePhotoDelete(index)} className="btn btn-sm btn-danger  position-absolute end-0 mt-1 me-3 ">
              <i className="fas fa-trash-alt "></i>
              </button>
            </div>
            
          </Col>
        );
      })}
    </Row>
                  </Form.Group> 
  
          </Container>
         
  
  
        <Form.Group controlId="formProductName">
          <Form.Label>Название товара</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Введите название товара" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </Form.Group>
  
        <Form.Group controlId="formProductDescription" className='mt-1'>
          <Form.Label>Описание товара</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Введите описание товара" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </Form.Group>
  
        <Form.Group controlId="formProductPrice" className='mt-1'>
          <Form.Label>Цена за единицу товара</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Введите цену за единицу товара" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </Form.Group>
  
        <Form.Group controlId="formProductQuantity" className='mt-1'>
          <Form.Label>Количество товара в наличии</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Введите количество товара в наличии" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
          />
        </Form.Group>
  
  
   
  
  
  
        <Button variant="primary" className='mt-5' type="submit">
          Cохранить
          
        </Button>
      </Form>
    );
}

export default GoodsEdit