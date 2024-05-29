import React from 'react'
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid"
import { useDispatch } from 'react-redux'
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice'

const Item = ({ifExists, id, color, shadow, title, text, img, btn, rating, price}) => {

  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = ({id, title, text, img, color, shadow, price})
    dispatch(setAddItemToCart(item));
  }

 const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true,
        }))
    }


  return (

    <>
      <div className={` relative bg-gradient-to-b ${ifExists? "justify-items-start " : " justify-items-center"} grid items-center ${color} ${shadow} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full`}>

        <div className={` grid items-center ${ifExists? "justify-items-start " : " justify-items-center"}r`}>

          <h1 className=' text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>

          <p className=' text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>

          <div className=' flex items-center justify-between w-28 my-2'>

            <div className='flex items-center bg-white/80 px-1 rounded'><h1>${price}</h1></div>
            <div className='flex items-center gap-1'> <StarIcon className='icon-style size-5 md:size-4'/><h1 className=' text-sm font-medium text-slate-100'>{rating}</h1></div>
          </div>

          <div className='flex items-center gap-3'>
            <button onClick={() => onAddToCart()} className=' bg-white blur-effect-theme button-theme p-0.5 shadow shadow-slate-200' type='button'><ShoppingBagIcon className='icon-style text-slate-900' /></button>
            <button type='button' onClick={() => {onAddToCart(); onCartToggle();} }  className=' bg-white blur-effect-theme button-theme px-2 py-1 text-sm shadow shadow-slate-200'>{btn}</button>
          </div>

        </div>

        <div className={`flex items-center ${ifExists? "absolute top-5 right-1 " : "justify-center"}`}>
          <img src={img} alt="icon/slate"  className={` transitions-theme hover:-rotate-12 
          ${ifExists? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]" : " h-36 w-64"}`}/>
        </div>

      </div>
    </>
  )
}

export default Item