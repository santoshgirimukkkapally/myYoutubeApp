import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
    const dispatch = useDispatch()
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())

    }
  return (
    <div className='w-full grid grid-flow-col shadow-lg p-2 m-2'>
        <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} alt="hamburger menu" className="h-6  my-3 cursor-pointer" src='https://www.iconbolt.com/preview/facebook/zwicon/hamburger-menu.svg' />
        <a href='/'>
        <img alt="youtube logo" className="h-12 mx-2 " src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' />
        </a>
        </div>
        <div className='col-span-10 text-center'>
            <input  className='rounded-l-full w-1/2 border-spacing-4 h-8  my-3 border border-gray-400' type='text' />
            <button className='rounded-r-full border h-8 border-gray-400 w-16'> 🔍</button>
        </div>
        <div className='col-span-1'>
        <img className='h-6 my-3' alt="user logo"  src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' />
        </div>
    </div>
  )
}

export default Head