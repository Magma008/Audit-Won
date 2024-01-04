import React from 'react'

const Hr = () => {
  return (
    <div>
      <hr/>
      <p className="text-2xl px-16 mt-4 font-[500]">© Copyright 2024</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div id="footer" className='bg-teal-600/40 py-6 md:py-10 lg:py-14'>
      <div className="py-4 px-16">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <li className='mb-6 lg:mb-0 items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Адрес:</p>
            <p className="text-xl font-[500]">г.Андижан, улица Бобуршох, 56</p>
          </li>
          <li className='mb-6 lg:mb-0 items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Рабочее время:</p>
            <p className="text-xl font-[500]">Пн - Пт 9:00 - 18:00 Суббота и Воскресенье      выходной день</p>
          </li>
          <li className='mb-6 md:mb-0 items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Email</p>
            <a href="mailto:haydarov.lochinbek@yandex.ru" className="text-xl font-[500]">haydarov.lochinbek@yandex.ru</a>
          </li>
          <li className='items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Контакты:</p>
            <a href="tel:+998999091117" className="text-xl font-[500]">+998 99 909 11 17</a>
          </li>
        </ul>
      </div>
      <Hr/>
    </div>
  )
}

export default Footer