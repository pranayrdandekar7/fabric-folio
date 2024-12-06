import React from 'react'

const HomeProductCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white mb-3 rounded-lg overflow-hidden shadow-lg w-[15rem] border mx-3 p-4'>
        <div className='w-[13rem] h-[10rem] '>
         <img src={product.imgUrl} alt='mens cotten kurta' className='object-cover object-top w-full h-full rounded-lg'   />

        </div>
        <div>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='text-sm mt-2 text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeProductCard ;