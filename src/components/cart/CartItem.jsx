import { TrashIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../app/CartSlice';

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }));
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  return (
    <>
      <div className='flex items-center justify-between px-5 w-full '>

        <div className=' flex items-center gap-5'>
          <div className={`bg-gradient-to-b ${color} ${shadow} p-3 relative rounded hover:scale-105 transition-all duration-75 ease-in-out grid place-items-center`}>
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className='w-36 h-auto object-fill lg:w-28'
            />
          </div>

          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
            </div>

            <div className='flex items-center justify-around w-full'>
              <button type='button' onClick={onDecreaseItemQTY} className=' bg-theme-cart rounded text-white size-5 flex items-center justify-center'><MinusIcon className='size-4 stroke-2' /></button>
              <div className=' bg-theme-cart size-5 text-white flex items-center justify-center text-sm'>{cartQuantity}</div>
              <button type='button' onClick={onIncreaseItemQTY} className='bg-theme-cart rounded text-white size-5 flex items-center justify-center'><PlusIcon className='size-4 stroke-2' /></button>
            </div>
          </div>
        </div>

        <div className='grid items-center gap-5'>
          <div className='grid items-center justify-center'>
            <h1 className=' text-lg lg:text-base text-slate-900 font-medium'>${price * cartQuantity}</h1>
          </div>
          <div className=' grid items-center justify-center'>
            <button type='button' onClick={onRemoveItem} className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center'><TrashIcon className='size-5 text-slate-200' /></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default CartItem
