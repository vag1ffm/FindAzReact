import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col, Card, Table } from 'react-bootstrap';
import {  Image, Modal,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Goods = () => {
    const products = [{
        id: 1,
        name: 'Amir Hasanov',
        image: 'https://genshinpedia.ru/wp-content/uploads/2022/10/1665308093_b1520c57cdd43dd90f2886b29f992411.jpg',
        description: 'Мощный и надежный ноутбук от Lenovo с быстрым процессором и большим дисплеем',
        price: 599.99,
        quantity: 10,
        rate: 9.5
      }]
      
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');
  
    useEffect(() => {
      // Получение данных с сервера (API) и установка состояния products
    }, []);
  
    const handleSort = (type) => {
      setSortType(type);
    };
  
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    if (sortType === 'newest') {
      filteredProducts.sort((a, b) => b.dateAdded - a.dateAdded);
    } else if (sortType === 'oldest') {
      filteredProducts.sort((a, b) => a.dateAdded - b.dateAdded);
    } else if (sortType === 'mostViewed') {
      filteredProducts.sort((a, b) => b.views - a.views);
    } else if (sortType === 'leastViewed') {
      filteredProducts.sort((a, b) => a.views - b.views);
    }



    

  
  
    
  
    return (
    <>
        <Container className='mt-3'>
            <Row className='d-flex align-items-end'>
                <Col>
                    <Form.Group controlId="search">
                    <Form.Label>Поиск товаров</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название товара"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="sort">
                        <Form.Label>Сортировка товаров</Form.Label>
                        <Form.Control as="select" onChange={(e) => handleSort(e.target.value)}>
                            <option value="newest" onClick={() => handleSort('newest')}>Новые</option>
                            <option value="oldest" onClick={() => handleSort('oldest')}>Старые</option>
                            <option value="mostViewed" onClick={() => handleSort('mostViewed')}>Больше просмотров</option>
                            <option value="leastViewed" onClick={() => handleSort('leastViewed')}>Меньше просмотров</option>
                        </Form.Control>
                    </Form.Group>
                </Col>  
                <Col>
                <Link to='/dashboard/goods/setting/add'>
                  <Button variant="primary">Add+</Button>

                </Link>
                </Col>  

            </Row>
            

            
        </Container>
        <Container className='mt-3'>
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>Название</th>
                <th>Количество</th>
                <th>Цена за 1</th>
                <th>Рейтинг</th>
                <th>Изменение</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                <td>
                    <Image src={product.image} width={50} height={50} rounded />
                    {product.name}
                </td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.rate}</td>
                <td>
                    <Link to={`/dashboard/goods/setting/change/${product.id}`}  >
                        <Button variant="info">Изменить</Button>
                    
                    </Link>
                    {/* <Button variant="primary" onClick={() => handleView(product)}>Перейти</Button> */}
                </td>
                </tr>
            ))}
            </tbody>
        </Table>

        

        </Container>
    </>
    );
}

export default Goods