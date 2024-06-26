import React from 'react'
 
const Clips = ({imgsrc, clip}) => {
  return (
    <>
        <div className=' relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14'>

            <img 
            src={imgsrc} 
            alt='img/clips'
            className=' inset-0 flex size-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 '/>

            <video className=' absolute top-0 left-0 right-0 flex size-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl'
             autoPlay= {true} loop={true} muted={true} playsInline={true}>
                <source 
                src={clip} 
                type="video/mp4" 
                />
            </video>

        </div>
    </>
  )
}

export default Clips