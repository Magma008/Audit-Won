import React from 'react'
import image from "../Images/arrow.png"
import css from "./Top.css"

const Top = () => {
  return (
    <div className='fixed bottom-2 right-0 lg:right-4 z-[1000]'>
      <a href="#content">
        <button>
          <img src={image} alt="up" className='animate-bounce w-[60%] md:w-[75%] lg:w-[100%]' />
        </button>
      </a>
    </div>
  )
}

export default Top