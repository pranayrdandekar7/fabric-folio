import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeProductCard from '../HomeProductCard/HomeProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MENS_KURTAS from '../../data.js/Mens-Kurtas';



const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        const firstElement = MENS_KURTAS[0]
        MENS_KURTAS.shift()
        MENS_KURTAS.push(firstElement)
        setActiveIndex(activeIndex - 1)
    };
    const slideNext = () =>{
        const lastElement = MENS_KURTAS[MENS_KURTAS.length-1]
        MENS_KURTAS.pop()
        MENS_KURTAS.unshift(lastElement)
        setActiveIndex(activeIndex + 1)
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item)

    const items = MENS_KURTAS.map((item) => <HomeProductCard product={item}/>)
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
            { activeIndex >=5  ? ( <button className=" border-2 py-3 px-1  rounded-md absolute top-24 left-4 bg-teal-300  hover:bg-white" onClick={slidePrev}>
                <KeyboardArrowLeftIcon />
            </button>) : null
            }
           {activeIndex !=7 ? (<button className=" border-2 py-3 px-1  rounded-md absolute top-24 right-2 bg-teal-300 hover:bg-white" onClick={slideNext}>
                <KeyboardArrowRightIcon />
            </button>):null }

            

        </div>
    )
}

export default HomeSectionCarousel