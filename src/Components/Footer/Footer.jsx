import React from 'react'

const Hr = () => {
  return (
    <div>
      <hr/>
      <p className="text-2xl px-16 mt-4 font-[500]">© Copyright 2023</p>
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
            <p className="text-xl font-[500]">г.Ташкент Мирабадский Район, Ул.Амира Темура, 13</p>
          </li>
          <li className='mb-6 lg:mb-0 items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Рабочее время:</p>
            <p className="text-xl font-[500]">Пн - Пт 9:00 - 18:00 Суббота и Воскресенье      выходной день</p>
          </li>
          <li className='mb-6 md:mb-0 items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Email</p>
            <a href="mailto:audit.won@mail.ru" className="text-xl font-[500]">audit.won@mail.ru</a>
          </li>
          <li className='items-center'>
            <p className="text-2xl font-bold text-teal-800 mb-2">Контакты:</p>
            <a href="tel:+998970001008" className="text-xl font-[500]">+998 97 000 10 08</a>
          </li>
        </ul>
      </div>
      <Hr/>
    </div>
  )
}

export default Footer