import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className=' productCard w-[15rem] m-3 transition-all cursor-pointer '>
      <div className='h-[18 rem] w-full object-cover '>
        <img src={product.imgUrl} className=' w-full ' alt='product-image' />
      </div>
      <div className='textpart p-1'>
        <div>
          <p className='font-bold opacity-80'>Bold Stitch</p>
          <p>Men Full Sleeve Checked Shirt</p>
        </div>

        <div className='flex  items-center space-x-2'>
          <span className='font-semibold'> ₹ {product.discountPrice} </span>
          <span className='line-through opacity-60 '> ₹ {product.price} </span>
          <span className='text-green-600 font-semibold'>{product.discountPercent} % off</span>
        </div>

      </div>

    </div>
  )
}

export default ProductCard