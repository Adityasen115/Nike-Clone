import {arrowRight} from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Buttons from '../Componets/Buttons'
import Shoecard from '../Componets/Shoecard'
import { shoes,statistics } from '../constants'

import { useState } from 'react'

const Hero = () => {
  const  [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      item-start w-full min-xl:p-0 pt-28">
        <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span> 
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes</h1>
          <p className='font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Buttons label='Shop now' iconURL={arrowRight} />

          <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((stats) => (
              <div key={stats.label}
              
              >
                <p className='font-bold text-4xl font-palanquin'>{stats.value}</p>
                <p className='text-slate-gray font-montserrat leading-7'>{stats.label}</p>
              </div>
            ))}
          </div>
          
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="big shoe" width={610} height={500} 
        className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((shoe) => (
          <div key={shoe.thumbnail}>
            <Shoecard 
              imgURL = {shoe}
              changeBigShoeImage = {(item) => setbigShoeImg(item)}
              bogShoeImage = {bigShoeImg}
            />
          </div>
          ))}
        </div>
      </div>

      
      
    </section>
  )
}

export default Hero