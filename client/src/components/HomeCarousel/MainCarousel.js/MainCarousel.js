import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from '../../../data.js/MainCarouselData';

const MainCarousel = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 1 },
    };



    const items = MainCarouselData.map((item) => (
        <img 
            src={item.img} 
            alt="" 
            className="cursor-pointer w-50" 
            role="presentation" 
        />
    ));
    
    return (
        <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
    


}

export default MainCarousel