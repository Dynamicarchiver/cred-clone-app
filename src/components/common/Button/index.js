import React from 'react'
import './Button.css'

const Button = ({buttonText, prefix, customClasses, onClick}) => {
  return (
    <button className={`button-wrapper flex absolute-center ${customClasses}`}
    onClick={onClick}>
      {prefix}
      {buttonText}
    </button>
  )
}

export default Button
