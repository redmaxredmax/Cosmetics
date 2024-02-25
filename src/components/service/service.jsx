import React from 'react'

export const ServiceCard = ({name,icon,text,id}) => {
  return (
    <div className='w-[160px] text-center '>
        <img className='mb-[16px] ml-auto mr-auto' src={icon} alt="icon" />
        <h3 className='text-xs font-semibold mb-[10px]'>{name}</h3>
        <p className='text-xs'>{text}</p>
    </div>
  )
}
