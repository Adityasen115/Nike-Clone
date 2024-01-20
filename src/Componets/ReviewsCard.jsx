import React from 'react'
import { star } from '../assets/icons'

const ReviewsCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col shadow-xl rounded-xl p-5'>
        <img src={imgURL} alt="Customer image" className='rounded-full object-contain w-[120px] h-[120px]' />
        <h3 className='mt-1 font-palanquin text-3x1 text-center font-bold'>{customerName}</h3>
        <div className='flex mt-3 justify-center items-center'><img src={star} alt="rating" width={24} height={24}
        className='object-contain m-0'/> 
        <p className='text-xl font-montserrat text-slate-gray'> ({rating})</p></div>
        
        <p className='info-text text-center mt-6 max-w-sm'>{feedback}</p>
    </div>
  )
}

export default ReviewsCard