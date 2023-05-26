import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel className=''>
        <Carousel.Item>
            <img
                className="d-block w-100 rounded"
                src="https://avatars.mds.yandex.net/get-adfox-content/2774030/230331_market_2330351_6527493_1.4dc2b2070c0bed95254d40b7f0c02b55.jpg/optimize.webp"
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded"
                src="https://avatars.mds.yandex.net/get-adfox-content/2367573/230207_market_2252094_6226255_1.88876712715e753643808a86fc6d1cdb.jpg/optimize.webp"
                alt="Second slide"
                />

                <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded"
                src="https://avatars.mds.yandex.net/get-adfox-content/2788782/230511_market_2392587_6905737_1.be771af92e3bb1ace572f7cb77905a93.jpg/optimize.webp"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;