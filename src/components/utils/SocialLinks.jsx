import React from 'react'

const SocialLinks = ({icon}) => {
  return (
    <>
        <img 
        src={icon} 
        alt="icon/social"
        className=' size-8 flex items-center cursor-pointer md:size-6 sm:size-5 transition-all duration-200 hover:scale-110' />
    </>
  )
}

export default SocialLinks