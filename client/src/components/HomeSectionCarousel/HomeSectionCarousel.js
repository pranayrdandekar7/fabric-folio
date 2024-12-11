import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeProductCard from '../HomeProductCard/HomeProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const HomeSectionCarousel = ({ data = [], sectionName }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        const lastElement = data[data.length - 1]
        data.pop()
        data.unshift(lastElement)
        setActiveIndex(activeIndex - 1)
    };

    const slideNext = () => {
        const firstElement = data[0]
        data.shift()
        data.push(firstElement)
        setActiveIndex(activeIndex + 1)
    };

    const items = data.map((item, index) => <HomeProductCard product={item} />)
    return (
        <>
            <div className='border bg-gray-100'>
                <h3 className="text-2xl font-bold ml-8 border-b-2  w-52 border-teal-400 "> {sectionName}</h3>
                <div className='relative px-4 mx-1   ' >
                    <div className=' p-3  '>
                        <AliceCarousel
                            items={items}
                            responsive={responsive}
                            controlsStrategy="alternate"
                            disableButtonsControls
                            disableDotsControls
                            activeIndex={activeIndex}
                        />
                    </div>
                    {activeIndex > 0 ? (<button className=" border-2 py-3 px-1  rounded-md absolute top-24 left-4 bg-teal-300  hover:bg-white" onClick={slidePrev}>
                        <KeyboardArrowLeftIcon />
                    </button>) : null
                    }
                    {activeIndex !== 7 ? (<button className=" border-2 py-3 px-1  rounded-md absolute top-24 right-2 bg-teal-300 hover:bg-white" onClick={slideNext}>
                        <KeyboardArrowRightIcon />
                    </button>) : null}

                </div>
                </div>
            </>
            )
}

            export default HomeSectionCarousel