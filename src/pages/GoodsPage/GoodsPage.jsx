import React from 'react'
import { useParams } from 'react-router-dom'
import Slider from './Slider'
import ProductReviews from '../../Components/review'

const GoodsPage = () => {
    const {id} = useParams()

  return (
    <>
    <div className='col-9'>
      <h1 className='mt-2 mb-3'>{id}</h1>
      <div className="first-stage d-flex justify-content-between col-12">
        <div className="photos col-8">
          <div className="slider col-12">
            <Slider/>
          </div>
        </div>
        <div className="main-info col-3">
          <div className="info">
                  <div className="name">Iphone 14 pro max</div>
                  <div className="price">51000$</div>
                  <div className="rating">
                      <div className="stars">
                          <i class="fa-solid fa-star"></i>    
                          <i class="fa-solid fa-star-half-stroke"></i>
                          <i class="fa-regular fa-star"></i>
                      </div>
                      <span>
                          9.1
                      </span>
                      
                  </div>
                  <div className="info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum, omnis vel atque voluptatibus tenetur culpa eaque nam tempora architecto earum cum, saepe autem iste asperiores magni deleniti dolor illum.
                  </div>

              </div>
        </div>
      </div>
      <div className="second-stage col-12">
        <div className="other-info col-8 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ipsam, assumenda vel maxime animi mollitia rerum consequatur commodi a sapiente libero tempore magnam ad amet at est voluptates iusto.
        </div>
      </div>
      <ProductReviews/>
      



      


    </div>
    
    
    
    
    </>
  )
}

export default GoodsPage