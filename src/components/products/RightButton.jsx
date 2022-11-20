import React from 'react';
import prev from '../../images/prev.png'

const RightButton = (onClick,onDisable) => {
  return (
    <img
    src={prev}
    alt="next"
    width='35px'
    height='35px'
    onDisable={onDisable}
    onClick={onClick}
    style={{float:'right',marginTop:'220px',cursor:'pointer'}}
    />
  )
}

export default RightButton