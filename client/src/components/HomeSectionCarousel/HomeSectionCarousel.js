import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeProductCard from '../HomeProductCard/HomeProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item)

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1,].map((item) => <HomeProductCard />)
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
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
            </div>
            { activeIndex !== items.length - 5 && <button className=" border-2 py-3 px-1  rounded-md absolute top-24 left-4 bg-teal-300  hover:bg-white" onClick={slidePrev}>
                <KeyboardArrowLeftIcon />
            </button>
            }
            <button className=" border-2 py-3 px-1  rounded-md absolute top-24 right-2 bg-teal-300 hover:bg-white" onClick={slideNext}>
                <KeyboardArrowRightIcon />
            </button>

        </div>
    )
}

export default HomeSectionCarousel