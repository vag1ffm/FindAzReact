import React from 'react'
import GoodsCard from '../Components/Card'

const Liked = () => {
  return (
    <div className="col-9 d-flex  row">
      <div className="slide-of-goods">
          <div className="category-of-goods mt-5 mb-5">
              <h1>Понравившиеся</h1>
          </div>
          <div className="slider-of-goods d-flex justify-content-start flex-wrap">
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
              <GoodsCard/>
          </div>
      </div>
    </div>
  )
}

export default Liked