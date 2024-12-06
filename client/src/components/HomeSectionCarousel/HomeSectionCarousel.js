import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeProductCard from '../HomeProductCard/HomeProductCard';

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items =[1,1,1,1,1,1,].map((item)=><HomeProductCard/>)
  return (
    <div>
         <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls
        />
    </div>
  )
}

export default HomeSectionCarousel