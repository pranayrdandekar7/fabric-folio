import React from 'react'

const HomeProductCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg w-[15rem]mx-3'>
        <div className='w-[13rem] h-[10rem]'>

         <img src='https://5.imimg.com/data5/SELLER/Default/2022/6/JQ/MY/GN/47089444/whatsapp-image-2022-06-25-at-7-46-21-pm-2--500x500.jpeg' alt='mens kurta' className='object-cover object-top w-full h-full'   />

        </div>
        <div>
            <h3 className='text-lg font-medium text-gray-900'>Manyavar</h3>
            <p className='text-sm mt-2 text-gray-500'>Men's Cotton Printed Kurta (1pc)</p>
        </div>
    </div>
  )
}

export default HomeProductCard