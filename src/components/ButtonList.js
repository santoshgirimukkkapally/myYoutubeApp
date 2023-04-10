import React from 'react';
import Button from './Button';

function ButtonList() {
    const buttons = ['All', 'Music', 'T-Series', 'Mixes', 'News', 'Live', 'Bollywood Music', 'Children Music', 'React router']

  return (
    <div>
    { buttons?.map((items, index) => <Button key={index} name={items}/>  )}
    </div>
  )
}

export default ButtonList