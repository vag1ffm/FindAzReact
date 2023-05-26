import { Container, Table, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


function OrderPage(props) {
    const order = {
        products: [
          {
            id: 1,
            name: 'Product 1',
            price: 9.99,
            quantity: 2,
            image: 'https://mobimg.b-cdn.net/v3/fetch/6a/6a0bc78cdb9edb24af51d46a95cc9007.jpeg',
          },
          {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 1,
            image: 'https://genshin-info.ru/upload/iblock/ea6/hutao.webp',
          },
          {
            id: 3,
            name: 'Product 3',
            price: 14.99,
            quantity: 3,
            image: 'https://phonoteka.org/uploads/posts/2022-09/1663393156_5-phonoteka-org-p-khu-tao-splesh-art-instagram-7.png',
          },
          {
            id: 4,
            name: 'Product 4',
            price: 24.99,
            quantity: 2,
            image: 'https://mobimg.b-cdn.net/v3/fetch/6a/6a0bc78cdb9edb24af51d46a95cc9007.jpeg',
          },
          {
            id: 5,
            name: 'Product 5',
            price: 29.99,
            quantity: 1,
            image: 'https://mobimg.b-cdn.net/v3/fetch/6a/6a0bc78cdb9edb24af51d46a95cc9007.jpeg',
          },
        ],
        paymentMethod: 'credit_card',
        shippingAddress: '123 Main St, Anytown USA',
        total: 179.92,
      };

      const [totalPrice, setTotalPrice] = useState(0);

  // вычисляем общую стоимость заказа
  const calculateTotalPrice = () => {
    let price = 0;
    order.products.forEach(product => {
      price += product.price * product.quantity;
    });
    setTotalPrice(price);
  };

  // вызываем вычисление суммы при первом рендере компонента
  useEffect(() => {
    calculateTotalPrice();
  }, []);
      

      return (
        <Container>
          <h1>Order #{order.id}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map(product => (
                <tr key={product.id}>
                  <td className='d-flex'>
                    <Image src={product.image} alt={product.name}  height={100} />
                    <span className='ms-5'>{product.name}</span>
                </td>
                  <td>{product.quantity}</td>
                  <td>${product.price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: ${totalPrice}</h4>
          <p>Payment method: {order.paymentMethod}</p>
          <p>Shipping status: {order.paymentMethod}</p>
          <p>Shipping address: {order.shippingAddress}</p>
        </Container>
      );
}

export default OrderPage;
