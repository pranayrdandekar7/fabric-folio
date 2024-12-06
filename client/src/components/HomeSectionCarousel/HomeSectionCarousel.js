import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeProductCard from '../HomeProductCard/HomeProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1, 1,].map((item) => <HomeProductCard />)
    return (
        <div className='relative px-4 mx-1 ' >
            <div className=' p-3  '>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    infinite
                    disableButtonsControls
                    disableDotsControls
                />
            </div>
            <button className=" border-2 py-3 px-1  rounded-md absolute top-28 left-4 bg-teal-300  hover:bg-white">
                <KeyboardArrowLeftIcon />
            </button>

            <button className=" border-2 py-3 px-1  rounded-md absolute top-28 right-2 bg-teal-300 hover:bg-white">
            <KeyboardArrowRightIcon/>
            </button>

            
        </div>
    )
}

export default HomeSectionCarousel