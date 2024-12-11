import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <div className=' productCard w-[15rem] m-3 transition-all cursor-pointer '>
      <div className='h-[18 rem] w-full object-cover '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBkjpiE1hqMzqUp-PScv8YP1-kgg9nt8ANw&s' className='d-block mx-auto my-0' alt='' />
      </div>
      <div className='textpart p-1'>
        <div>
          <p className='font-bold opacity-80'>Bold Stitch</p>
          <p>Men Full Sleeve Checked Shirt</p>
        </div>

        <div className='flex  items-center space-x-2'>
          <span className='font-semibold'> ₹ 649 </span>
          <span className='line-through opacity-60 '> ₹ 1299 </span>
          <span className='text-green-600 font-semibold'>50 % off</span>
        </div>

      </div>

    </div>
  )
}

export default ProductCard