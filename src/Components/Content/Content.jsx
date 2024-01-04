import React from 'react'
import css from "./Content.css"

const Content = () => {
  return (
    <div id='content' className='bg flex flex-col justify-center items-start px-3 md:px-10 lg:px-20 pt-9'>
        <div className='d-grid'>
            <div>
            <h1 className='text-[4em] md:text-[6em] font-bold'>О нас</h1>
            <p className='text-[1em] md:text-[1.5em] font-semibold'>Аудиторская организация ООО «INTERNATIONAL AUDIT CONSULTING» осуществляет свою деятельность на основании свидетельство РУз. №1951235 от 31 августа 2023г.</p>
            </div>
        </div>
    </div>
  )
}

export default Content