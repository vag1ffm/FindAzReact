import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const GoodsCard = () => {

    let [like, setLike] = useState(0)

    function Like() {
        setLike(1)
    }



  return (
    <>
        <Card style={{ width: '14rem' , height: '26rem', textDecoration: 'none', borderColor: 'rgb(3 206 151 / 35%)', position: 'relative', marginRight:'10px', marginBottom: '10px'  }}>
            <Card.Body>
                <Link to={`/goodspage/${5}`} >
                    <Card.Img className='mb-4' variant="top mt-2" src="https://avatars.mds.yandex.net/get-mpic/5228682/img_id5643238785392184096.jpeg/200x200" />

                    <Card.Title>Iphone 14 pro max</Card.Title>
                    <Card.Text>
                    Смартфон Apple iPhone 13 256 ГБ, Dual nano SIM, (PRODUCT)RED, Slimbox
                    </Card.Text>
                </Link>
                <Button variant="primary" className='mt-3' style={{backgroundColor: '#03ce97', width: '100%'}}>В корзину</Button>
            </Card.Body>
            <i onClick={Like} style={{color: (like && 'red')}} class="fa-solid fa-heart position-absolute top-0 end-0 m-2"></i>
        </Card>  
    </>
  )
}

export default GoodsCard