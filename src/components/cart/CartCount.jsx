import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const CartCount = ({onCartToggle,totalQTY, onClearCart}) => {
  return (
    <>
    <div className=' bg-white h-11 flex items-center justify-between px-3 sticky inset-x-0 top-0 w-full'>

       <div className='flex items-center gap-3'>
        <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
          <ChevronDoubleLeftIcon className= 'size-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
        </div>
        <div className='grid items-center'>
          <h1 className='text-base font-medium '>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-xs text-slate-100'>({totalQTY}Items)</span></h1>
        </div>
      </div>

      <div className='flex items-center'>
        <button type='button'
        onClick={onClearCart}
        className='rounded bg-theme-cart active:scale-90 p-0.5'><XMarkIcon className=' size-5 text-white '/></button>
      </div>

    </div>
    </>
  )
}

export default CartCount