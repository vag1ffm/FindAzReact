import React from "react";
import Slider from "./MainSlider";
import GoodsSlider from "./GoodsSlider";

const MainPage = () => {

    return (
        <div className="col-9 d-flex  row">
            <Slider/>
            
            <div className="d-flex col-12 ">
                <div className="slide-of-goods col-10">
                    <div className="category-of-goods mt-5 mb-5">
                        <h1>На основе просмотров</h1>
                    </div>
                    <div className="slider-of-goods">
                        <GoodsSlider/>
                    </div>
                </div>
                
                <div className="adds mt-5 col-2 row ">
                    <div className="add ml-5">
                        <img alt='photo' className="col-12 mt-2" src="https://avatars.mds.yandex.net/get-adfox-content/2765366/230403_market_2163020_5937348_1.e15db6e8ae4e341638ef8905ec5a6522.png/optimize.webp" />
                        <img alt='photo' className="col-12 mt-2" src="https://avatars.mds.yandex.net/get-adfox-content/2765366/230502_market_2380830_6879133_1.a8e1abbd8927c5c0517b1223f46255aa.jpg/optimize.webp" />
                        <img alt='photo' className="col-12 mt-2" src="https://avatars.mds.yandex.net/get-adfox-content/2367573/230501_market_2380820_6879099_1.77eac653095377e49ca6c7e95d888c0e.jpg/optimize.webp" />

                    </div>
                </div>
            </div>
            

        
        </div>
    )
}

export default MainPage;