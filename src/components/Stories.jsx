import React from 'react'
import Title from './utils/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { truncate } from 'lodash';

const Stories = ({story: {title, news}}) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };
  return (
    <>
    <div className='nike-container mb-11'>

        <Title title={title} />

        <div className='mt-[50px]'>
            <Splide options={splideOptions}>
                {news.map((val, i) => (

                    <SplideSlide key={i} className='mb-0.55'>
                        <div className=' relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                            <div className=' flex items-center justify-center'>
                                <img src= {val.img} alt="img" className=' w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg ' />
                            </div>
                        
                            <div className=' grid items-center justify-items-start px-4'>
                                <h1 className=' text-base font-semibold lg:text-sm'>{val.title}</h1>
                                <p className=' text-sm text-justify lg:text-xs'>{truncate(val.text, {length: 175})}</p>
                            </div>

                            <div className=' flex items-center justify-center px-4 w-full'>
                                <a href={val.url} type='button' className=' w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-white py-1.5 button-theme'>{val.btn}</a>
                            </div>
                        </div>
                    </SplideSlide>

                ))}
            </Splide>
        </div>
        
    </div>
    </>
  )
}

export default Stories