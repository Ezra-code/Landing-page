import React from 'react'
import {offer} from '../assets/images'
import {arrowRight} from '../assets/icons'
import Button from '../components/Button'
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
          <img src={offer} alt="offer image" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
           <span className="text-coral-red inline-block mt-3">
           Special
          </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          ensuring premium comfort and style our meticulously crafted footwear
          is designed to elevatee your experience providing you qith unmatched
          quality innovation and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to dwtail and excellence ensures your satisfaction
        </p>
        <div className="mt-ll flex flex-wrap gap-4">
          <Button label="shop now" iconUrl={arrowRight}/>
          <Button backgroundColor="bg-white" label="Learn More" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers