import React from 'react'

const HomeProductCard = ({product}) => {

  const {imgUrl,brand,title} = product
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white mb-3 rounded-lg overflow-hidden shadow-lg h-[17rem] w-[14rem] border mx-3 p-1'>
        <div className='w-[13rem] h-[12rem] '>
         <img src={imgUrl} alt='mens cotten kurta' className='object-cover object-top w-full h-full rounded-lg'   />

        </div>
        <div>
            <h3 className='text-lg font-medium text-gray-900 text-center'>{brand}</h3>
            <p className='text-sm mt-2 text-gray-500 text-center'>{title}</p>
        </div>
    </div>
  )
}

export default HomeProductCard ;