import React from 'react'

export const Bestseller = ({img,name,price,id}) => {
  return (
    <div className='w-[164px] flex flex-col justify-center '>
        <img className='text-center mb-2' src={img} alt="img" />
        <h3 className='text-xs mb-[6px] font-semibold'>{name}</h3>
        <p className='text-xs '>{price}</p>
    </div>
  )
}
