import React from 'react'

const SocialMediaCard = ({src,alt}) => {
  return (
    <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
        <img src={src} alt={alt} height={24} width={24} />
    </div>
  )
}

export default SocialMediaCard