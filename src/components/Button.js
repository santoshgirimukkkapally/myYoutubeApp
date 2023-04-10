import React from 'react'

function Button({name}) {
    // const buttons = ['All', 'Music', 'T-Series', 'Mixes', 'News', 'Live', 'Bollywood Music', 'Children Music', 'React router']
  return (
    <>
    <button className='px-5 py-2 m-2 bg-slate-100 rounded-lg'> {name}</button> 
    </>
    
  )
}

export default Button