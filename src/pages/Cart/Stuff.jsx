import React from 'react'

const Stuff = () => {
  return (
    <>
        <div className='good-stuff d-flex position-relative'>
            <div className="img">
                <img src="https://avatars.mds.yandex.net/get-mpic/5228682/img_id5643238785392184096.jpeg/200x200" alt="photo" />
            </div>
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
            <button  className="btn btn-sm btn-danger  position-absolute end-0 top-0 mt-1 me-3 ">
                    <i className="fas fa-trash-alt "></i>
                  </button>
        </div>
    </>
  )
}

export default Stuff