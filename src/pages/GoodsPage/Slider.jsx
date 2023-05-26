import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const Slider = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh6.googleusercontent.com/guUGrJbynLIrcn-SrjkgSAVPVxmsxwJsSjASa-VsKvlJtjowkPH5hjCOJj8X6EyZUDG6XxxvOVlKqH88uvEkV0NUrGIpWdztjvOkyEdmXLpXXkNXCTyIC8SK6LcJHP-BLHbn_RnMvz_UxlbKoCI"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://x-true.info/uploads/posts/2022-11/iphone-14.webp"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.comentr.com/mPZysk5cN93TYXC2ZE__Wv45HhY_tal.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Slider