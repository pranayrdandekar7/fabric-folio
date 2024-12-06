import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from '../../../data.js/MainCarouselData';

const MainCarousel = () => {


    const items = MainCarouselData.map((item) => (
        <img 
            src={item.img} 
            alt="" 
            className="cursor-pointer object-cover w-full h-96  " 
            role="presentation" 
        />
    ));
    
    return (
        <AliceCarousel
            items={items}
          
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls
        />
    );
    


}

export default MainCarousel