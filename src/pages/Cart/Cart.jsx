import React from 'react'
import GoodsCard from '../../Components/Card'
import Stuff from './Stuff'

const Card = () => {
  return (
    <div className="col-9 d-flex  row">
      <div className="slide-of-goods">
          <div className="category-of-goods mt-5 mb-5">
              <h1>Корзина</h1>
          </div>
          <div className="slider-of-goods d-flex col-9">
            <div className='orders d-flex justify-content-start'>
              <Stuff/>
            </div>
            <div className="check col-3">
              <div className="receipt ms-5">
                <h2>Чек</h2>
                <div className="list-of-stuff mt-5">
                  <ul>
                    <li>
                      <div className="name">Iphone 14 max</div>
                      <div className="price">5100$</div>
                    </li>
                 
                  </ul>
                  <div className="end-price mt-5">
                    <h4>price</h4>
                    <h4>200000$</h4>
                  </div>
                </div>
              </div>
            </div>
             
          </div>
      </div> 
    </div>

  )
}

export default Card