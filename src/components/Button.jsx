import React from 'react'

function Button({variant, children, ...props}) {
    let buttonName = 'px-5 py-2 rounded-full mx-2 '
    if(variant === 'Register'){
        buttonName += 'bg-red-500 text-white font-normal outline outline-1 outline-red-500'
    }
    else if(variant === 'Login'){
        buttonName += 'bg-transparent text-red-500 font-normal outline outline-1 outline-red-500'
    }
    else if (variant === 'watch'){
        buttonName += 'bg-red-500 text-white font-lg outline outline-1 outline-red-500 w-3/12 flex items-center justify-center'
    }
  return (
    <button className={buttonName} {...props}>
        {children}
    </button>
  )
}

export default Button